import { Link } from "react-router-dom";

interface ILink {
  to: string;
  text: string;
}

function StyledLink({ to, text }: ILink) {
  return <Link to={to} className="text-xl font-semibold text-blue-900">{text}</Link>;
}

export default StyledLink;
