import { Link } from "react-router";
import { DROPDOWN_ITEMS } from "./config";
import s from "./s.module.scss";
import { userStore } from "@/features/Auth";

type Props = {
  setOpen: (b: boolean) => void;
  setAuthenticated: (b: boolean) => void;
};

export const HeaderDropdown = ({ setOpen, setAuthenticated }: Props) => {
  const { logout } = userStore;

  const handleClick = (link: string) => {
    if (link === "/") {
      logout();
      setAuthenticated(false);
    }
    setOpen(false);
  };

  return (
    <div className={s.dropdown}>
      {DROPDOWN_ITEMS.map((item, index) => (
        <Link
          onClick={() => handleClick(item.href)}
          className={s.dropdownItem}
          to={item.href}
          key={index}
        >
          {item.img}
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
};
