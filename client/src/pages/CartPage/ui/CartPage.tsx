import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { CartTable } from "@/widgets/Cart";
import { Link, useNavigate } from "react-router";
import { CartTotal } from "@/features/CartTotal";
import { userStore } from "@/features/Auth";
import { useEffect } from "react";
export const CartPage = () => {
  const navigate = useNavigate();
  const { user } = userStore;

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);
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
