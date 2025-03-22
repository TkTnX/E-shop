import { CartItemType } from "@/app/types";
import s from "./s.module.scss";
import { CartItemQuantity } from "@/features/CartItemQuantity";
import { CartRemoveItemButton } from "@/features/CartRemoveItemButton";

type Props = {
  item: CartItemType;
  cartId: number;
};

export const CartItem = ({ item, cartId }: Props) => {
  return (
    <div className={s.cartItem}>
      <div className={s.imgWrapper}>
        <CartRemoveItemButton id={item.product._id} />
        <img src={item.product.img} alt={item.product.title} />
        <h5>{item.product.title}</h5>
      </div>
      <p className={s.price}>
        <span>price: </span>${item.product.price}
      </p>
      <CartItemQuantity
        cartId={cartId}
        productId={item.product._id}
        defaultQuantity={item.quantity}
      />
      <p className={s.subtotal}>
        <span>subtotal: </span>${item.product.price * item.quantity}
      </p>
    </div>
  );
};
