import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Faild To Featch Meals");
        }
        const data = await response.json();
        setData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }

      console.log(data, isLoading, error)
    }
    fetchData();
  }, [url]);
  return { data, isLoading, error };

}
