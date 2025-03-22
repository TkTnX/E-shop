import s from "./s.module.scss";
export const CartEmpty = () => {
  return (
    <div className={s.wrapper}>
      <h2>Cart is empty!</h2>
      <p>Find something in our catalog</p>
    </div>
  );
};
