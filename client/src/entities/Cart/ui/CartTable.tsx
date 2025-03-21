import { useQuery } from "@tanstack/react-query";
import { CartItem } from "./CartItem";
import s from "./s.module.scss";
import { getCart } from "../api";
import { CartItemType } from "@/app/types";
import { cartStore } from "../model";
import { observer } from "mobx-react-lite";
export const CartTable = observer(() => {
  const { setCart } = cartStore;
  const { data, isPending, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const cart = await getCart();
      setCart(cart);
      return cart;
    },
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <div className={s.table}>
      {/* TABLE TOP */}
      <div className={s.top}>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      {/* TABLE LIST */}
      <div className={s.list}>
        {data.products.map((cartItem: CartItemType) => (
          <CartItem cartId={data._id} item={cartItem} />
        ))}
      </div>
    </div>
  );
});
