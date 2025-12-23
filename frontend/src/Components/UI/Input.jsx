import { useState, useEffect } from "react";
import validation from "../../utils/validation";

export default function Input({ title, type, id, setErrors, ...prors }) {
  const [error, setError] = useState(false);
  const cssStayle = error ? { borderColor: "red" } : {};
  function handelBlur(e) {
    if (validation(type, e.target.value)) {
      setError(validation(type, e.target.value));
      setErrors((prev) => ({ ...prev, [e.target.id]: true }));
    } else {
      setError(false);
      setErrors((prev) => ({ ...prev, [e.target.id]: false }));
    }
  }
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="control">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        name={id}
        {...prors}
        style={cssStayle}
        onBlur={handelBlur}
      />
      {error && <p className="error-massage">{error}</p>}
    </div>
  );
}
