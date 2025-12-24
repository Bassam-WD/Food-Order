import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(response.message || "Something went wrong, faild to send request");
  }

  return resData

}



export default function useFetch(url, config, inValue) {
  const [data, setData] = useState(inValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // clear data function to use it when Order succes
  function clearData() {
    setData(inValue)
  }


  const sendRequest = useCallback(async function sendRequest(data) {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, { ...config, body: data });
      setData(resData);
      console.log(resData, 'resdata');

    } catch (error) {
      setError(error.message || "Something went wrong");// to sure just be safe.
    } finally {
      setIsLoading(false);
    }
  }
    , [url, config])



  useEffect(() => {
    if (config && (config.method === "GET" || !config.method) || !config) {
      sendRequest();
    }

  }, [sendRequest, config]);



  return { data, isLoading, error, sendRequest , clearData};

}
