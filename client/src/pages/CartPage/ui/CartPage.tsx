import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { CartTable } from "@/entities/Cart";
import { Link } from "react-router";
import { CartTotal } from "@/features/CartTotal";
export const CartPage = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <Breadcrumbs steps={[{ name: "Home", href: "/" }, { name: "Cart" }]} />
      <CartTable />
      <Link className={s.link} to="/catalog">
        Return To Shop
      </Link>
      <CartTotal />
    </div>
  );
};
