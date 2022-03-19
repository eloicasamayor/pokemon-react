import { Link } from "react-router-dom";
export function MoreInfoLink({ to, text }) {
  return (
    <Link className="more-info shadow" to={to}>
      {text}
      <span>{" ›"}</span>
    </Link>
  );
}
