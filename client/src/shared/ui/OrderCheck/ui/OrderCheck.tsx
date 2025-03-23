import s from "./s.module.scss"
export const OrderCheck = ({totalPrice}: {totalPrice: number}) => {
  return (
    <ul className={s.list}>
      <li>
        <p>Subtotal:</p>
        <span>{totalPrice}</span>
      </li>
      <li>
        <p>Shipping:</p>
        <span>Free</span>
      </li>
      <li>
        <p>Total:</p>
        <span>{totalPrice}</span>
      </li>
    </ul>
  );
}
