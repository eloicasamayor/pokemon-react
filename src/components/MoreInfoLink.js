import { Link } from "react-router-dom";
export function MoreInfoLink({ to, text }) {
  return (
    <Link className="more-info" to={to}>
      {text}
    </Link>
  );
}
