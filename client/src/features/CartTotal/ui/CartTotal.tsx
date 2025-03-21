import { cartStore } from "@/entities/Cart";
import s from "./s.module.scss";
import { observer } from "mobx-react-lite";

export const CartTotal = observer(() => {
  const { cart } = cartStore;
  if (!cart) return null;
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>Cart Total</h4>

      <ul className={s.list}>
        <li>
          <p>Subtotal:</p>
          <span>{cart.totalPrice}</span>
        </li>
        <li>
          <p>Shipping:</p>
          <span>Free</span>
        </li>
        <li>
          <p>Total:</p>
          <span>{cart.totalPrice}</span>
        </li>
      </ul>

      <button className={s.button}>Go to Checkout</button>
    </div>
  );
});
