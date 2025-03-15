import { HeaderSearch } from "@/features/HeaderSearch";
import s from "./s.module.scss";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";
export const HeaderControls = () => {
  return (
    <div className={s.controls}>
      <HeaderSearch />
      <Link  className={s.link} to="/favorites">
        <Heart />
      </Link>
      <Link  className={s.link} to="/cart">
        <ShoppingCart />
      </Link>
    </div>
  );
};
