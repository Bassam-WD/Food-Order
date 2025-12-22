export default function Input({ title, id, ...prors }) {
  return (
    <div className="control">
      <label htmlFor={id}>{title}</label>
      <input  id={id} name={id} {...prors} />
    </div>
  );
}
