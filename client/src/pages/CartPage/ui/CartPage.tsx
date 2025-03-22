import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { CartTable } from "@/widgets/Cart";
import { Link } from "react-router";
import { CartTotal } from "@/features/CartTotal";
export const CartPage = () => {
  // * TODO: При каждой функции в api (addToCart, changeItemQuantity, removeItemFromCart) нужно изменять totalPrice корзины
  // * TODO: Подсчёт totalPrice
  // * TODO: При добавлении в корзину что-то изменять в ui
  // * TODO: Функционал кнопки "Move all to cart" в favorites
  // TODO: Учитывать скидки в корзине при подсчёте totalPrice

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
