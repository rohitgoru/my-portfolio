import Link from "next/link";

const NavLink = ({ item, onClick }) => {
  return (
    <li className="link-style transition-all duration-150 ease-in-out">
      <Link onClick={onClick} href={item.to}>
        {item.label}
      </Link>
    </li>
  );
};

export default NavLink;
