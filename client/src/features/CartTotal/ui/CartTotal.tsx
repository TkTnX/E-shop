import { cartStore } from "@/widgets/Cart";
import s from "./s.module.scss";
import { observer } from "mobx-react-lite";
import { Link } from "react-router";
import { OrderCheck } from "@/shared/ui/OrderCheck/ui";

export const CartTotal = observer(() => {
  const { cart, totalPrice } = cartStore;
  if (!cart || cart.products.length === 0) return null;
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>Cart Total</h4>

      <OrderCheck totalPrice={totalPrice} />

      <Link to={"/checkout"} className={s.button}>
        Go to Checkout
      </Link>
    </div>
  );
});
