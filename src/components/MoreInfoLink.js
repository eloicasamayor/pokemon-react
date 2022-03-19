import { Link } from "react-router-dom";
export function MoreInfoLink({ to, text, title }) {
  return (
    <Link className="more-info shadow" to={to} title={title}>
      {text}
      <span>{" ›"}</span>
    </Link>
  );
}
