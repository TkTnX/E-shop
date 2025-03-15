import { Link, useLocation } from "react-router";
import s from "./s.module.scss";
import { NAV_LINKS } from "./config";
import { HeaderControls } from "@/entities/HeaderControls";

export const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <p className={s.text}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Link className={s.link} to="/catalog">
          Shop Now
        </Link>{" "}
      </p>
      <header className={s.header}>
        <Link className={s.logo} to="/">
          Exclusive
        </Link>
        <nav className={s.nav}>
          {NAV_LINKS.map((link, index) => (
            <Link
              className={pathname === link.path ? s.active : ""}
              to={link.path}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <HeaderControls />
      </header>
      <div className={s.devider} />
    </>
  );
};
