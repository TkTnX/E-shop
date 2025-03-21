import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { CartTable } from "@/entities/Cart";
export const CartPage = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <Breadcrumbs steps={[{ name: "Cart" }]} />
      <CartTable />
    </div>
  );
};
