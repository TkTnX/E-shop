import { useState } from "react";
import s from "./s.module.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { changeItemQuantity } from "@/widgets/Cart";

type Props = {
  defaultQuantity: number;
  productId: number;
  cartId: number;
};

export const CartItemQuantity = ({
  defaultQuantity,
  cartId,
  productId,
}: Props) => {
  const [value, setValue] = useState(defaultQuantity);

  const mutation = useMutation({
    mutationFn: async (type: "plus" | "minus") => {
      if (type === "minus") {
        if (value > 1) {
          setValue(value - 1);
          await changeItemQuantity(productId, value - 1, cartId);
        }
      } else {
        setValue(value + 1);
        await changeItemQuantity(productId, value + 1, cartId);
      }
    },
  });

  return (
    <div className={s.wrapper}>
      <div className={s.quantity}>
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
