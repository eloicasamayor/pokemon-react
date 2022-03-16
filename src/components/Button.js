export function Button({ disabled, onclick, text }) {
  return (
    <button disabled={disabled} onClick={onclick}>
      {text}
    </button>
  );
}
