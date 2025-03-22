import s from "./s.module.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cartStore, changeItemQuantity } from "@/widgets/Cart";

type Props = {
  productId: number;
  cartId: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export const CartItemQuantity = ({
  cartId,
  productId,
  value,
  setValue,
}: Props) => {
  const { setTotalPrice } = cartStore;
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (type: "plus" | "minus") => {
      if (type === "minus") {
        if (value > 1) {
          setValue(value - 1);
          const cart = await changeItemQuantity(productId, value - 1, cartId);
          setTotalPrice(cart.totalPrice);
        }
      } else {
        setValue(value + 1);

        const cart = await changeItemQuantity(productId, value + 1, cartId);
        setTotalPrice(cart.totalPrice);
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  return (
    <div className={s.wrapper}>
      <div className={`${mutation.isPending ? s.disabled : ""} ${s.quantity}`}>
        <span>{`${value < 10 ? `0${value}` : `${value}`}`}</span>
        <div className={s.buttons}>
          <button onClick={() => mutation.mutate("plus")}>
            <ChevronUp size={16} />
          </button>
          <button onClick={() => mutation.mutate("minus")}>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
