export function Button({ disabled, onclick, text, title }) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className="shadow"
      title={title}
    >
      {text}
    </button>
  );
}
