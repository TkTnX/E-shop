import { useMutation, useQueryClient } from "@tanstack/react-query";
import s from "./s.module.scss";
import { addToCart, cartStore } from "@/widgets/Cart";
import { ProductItemType } from "@/app/types";

export const AddToCart = ({ product }: { product: ProductItemType }) => {
  const queryClient = useQueryClient();
  const { addToCart: addToStoreCart } = cartStore;
  const mutation = useMutation({
    mutationFn: () => addToCart(product._id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      addToStoreCart(product);
    },
  });

  return (
    <button
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
      className={`addToCart ${s.addToCart}`}
    >
      {mutation.isSuccess ? "Added to cart" : "Add to cart"}
    </button>
  );
};
