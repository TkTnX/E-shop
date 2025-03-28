import { useMutation, useQueryClient } from "@tanstack/react-query";
import s from "./s.module.scss";
import { addToCart, cartStore } from "@/widgets/Cart";
import { ProductItemType } from "@/app/types";
import { toast } from "react-toastify";

type Props = {
  product: ProductItemType
  className?: string
}

export const AddToCart = ({ product, className }: Props) => {
  const queryClient = useQueryClient();
  const { addToCart: addToStoreCart } = cartStore;
  const mutation = useMutation({
    mutationFn: () => addToCart(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      addToStoreCart(product);
      toast.success("Product is added to cart!");
    },
    onError: () => {
      toast.error("Product is not added to cart");
    },
  });

  return (
    <button
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
      className={`addToCart ${s.addToCart} ${className}`}
    >
      {mutation.isSuccess ? "Added to cart" : "Add to cart"}
    </button>
  );
};
