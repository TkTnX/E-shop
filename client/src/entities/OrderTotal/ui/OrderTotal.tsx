import { OrderCheck } from "@/shared/ui/OrderCheck/ui";
import s from "./s.module.scss";
import { cartStore } from "@/widgets/Cart";
import { OrderFinalDetails } from "@/features/OrderFinalDetails";
export const OrderTotal = () => {
  const { cart, totalPrice } = cartStore;
  if (!cart || cart.products.length === 0) return null;

  return (
    <div className={s.wrapper}>
      {/* ITEMS */}
      <div>
        {cart.products.map(({ product }) => (
          <div className={s.item} key={product._id}>
            <div className={s.itemTitle}>
              <img src={product.img} alt={product.title} />
              <h6>{product.title}</h6>
            </div>
            <p>
              $
              {product.discount
                ? product.price - product.price * product.discount
                : product.price}
            </p>
          </div>
        ))}
      </div>
      {/* PRICE */}
      <OrderCheck totalPrice={totalPrice} />

      <OrderFinalDetails />
    </div>
  );
};
