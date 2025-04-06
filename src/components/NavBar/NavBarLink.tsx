import { Link, useLocation } from "react-router-dom";

interface Props {
  label: string;
}

const NavBarLink = ({ label }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === `/${label}`;

  return (
    <Link
      to={`/${label}`}
      className={
        "inline text-white hover:opacity-100 hover:underline text-xl font-semibold transition " +
        (isActive ? "opacity-100 underline" : "opacity-75")
      }
    >
      {label}
    </Link>
  );
};

export default NavBarLink;
