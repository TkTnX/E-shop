import { X } from "lucide-react";
import s from "./s.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cartStore, removeItemFromCart } from "@/widgets/Cart";
export const CartRemoveItemButton = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();
  const { removeProductFromCart } = cartStore;
  const mutation = useMutation({
    mutationFn: () => removeItemFromCart(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      removeProductFromCart(id);
    },
  });


  return (
    <button
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
      className={s.button}
    >
      <X stroke="#fff" />
    </button>
  );
};
