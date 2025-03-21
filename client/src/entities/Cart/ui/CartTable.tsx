import s from "./s.module.scss";
export const CartTable = () => {
  return (
    <div className={s.table}>
      {/* TABLE TOP */}
      <div className={s.top}>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div className={s.list}>
        
      </div>
    </div>
  );
};
