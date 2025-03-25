import { CartItemType } from "@/app/types";
import s from "./s.module.scss";
import { CartItemQuantity } from "@/features/CartItemQuantity";
import { CartRemoveItemButton } from "@/features/CartRemoveItemButton";
import { useState } from "react";
import { Link } from "react-router";

type Props = {
  item: CartItemType;
  cartId: number;
};

export const CartItem = ({ item, cartId }: Props) => {
  const [value, setValue] = useState(item.quantity);

  const price = item.product.discount
    ? item.product.price - item.product.price * item.product.discount
    : item.product.price;

  return (
    <div className={s.cartItem}>
      <div className={s.imgWrapper}>
        <CartRemoveItemButton id={item.product._id} />
        <Link className={s.imgWrapper} to={`/product/${item.product._id}`}>
          <img src={item.product.img} alt={item.product.title} />
          <h5>{item.product.title}</h5>
        </Link>
      </div>
      <p className={s.price}>
        <span>price: </span>$
        {item.product.discount ? (
          <>
            {price}{" "}
            <b className={s.priceWithoutDiscount}>${item.product.price}</b>
          </>
        ) : (
          price
        )}
      </p>
      <CartItemQuantity
        cartId={cartId}
        productId={item.product._id}
        value={value}
        setValue={setValue}
      />
      <p className={s.subtotal}>
        <span>subtotal: </span>${price * value}
      </p>
    </div>
  );
};
