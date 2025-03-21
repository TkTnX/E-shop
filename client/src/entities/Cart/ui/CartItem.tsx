import { CartItemType } from "@/app/types";
import s from "./s.module.scss";
import { CartItemQuantity } from "@/features/CartItemQuantity";

type Props = {
  item: CartItemType;
};

export const CartItem = ({ item }: Props) => {
  return (
    <div className={s.cartItem}>
      <div>
        <img src={item.img} alt={item.title} />
        <h5>{item.title}</h5>
      </div>
      <p>${item.price}</p>
      <CartItemQuantity />
    </div>
  );
};
