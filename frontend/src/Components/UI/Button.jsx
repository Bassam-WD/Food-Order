export default function Button({ children, className, textButton, ...props }) {
  const cssClass = textButton
    ? `text-button ${className}`
    : `button ${className}`;
  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}
