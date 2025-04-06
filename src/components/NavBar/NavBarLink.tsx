import { Link, useLocation } from "react-router-dom";

interface Props {
  label: string;
  externalHref?: string; // ✅ Add this line to allow optional external links
}

const NavBarLink = ({ label, externalHref }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === `/${label.toLowerCase()}`;

  const baseClasses =
    "inline text-white hover:opacity-100 hover:underline text-xl font-semibold transition ";
  const activeClass = isActive ? "opacity-100 underline" : "opacity-75";

  // If it's an external link, use <a>
  if (externalHref) {
    return (
      <a
        href={externalHref}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses + "opacity-75"} // External links are never "active"
      >
        {label}
      </a>
    );
  }

  // Internal link using <Link>
  return (
    <Link to={`/${label.toLowerCase()}`} className={baseClasses + activeClass}>
      {label}
    </Link>
  );
};

export default NavBarLink;