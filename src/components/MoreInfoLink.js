import { Link } from "react-router-dom";
export function MoreInfoLink({ to, text }) {
  return <Link to={to}>{text}</Link>;
}
