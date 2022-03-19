export function Button({ disabled, onClick, text, title }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="shadow"
      title={title}
    >
      {text}
    </button>
  );
}
