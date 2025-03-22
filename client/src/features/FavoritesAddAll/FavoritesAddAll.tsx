import { useMutation } from "@tanstack/react-query";
import s from "./s.module.scss";
import { favoritesStore } from "@/widgets/Favorites";
import { addToCart } from "@/widgets/Cart";
import { ProductItemType } from "@/app/types";
import { toast } from "react-toastify";
export const FavoritesAddAll = () => {
  const { favorites } = favoritesStore;
  console.log(favorites);
  const mutation = useMutation({
    mutationFn: async () => {
      favorites.forEach(
        async (item) => await addToCart(item as unknown as ProductItemType)
      );
    },
    onSuccess: () => {
      toast.success("Products are added to cart");
    },
  });

  return (
    <button
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
      className={s.button}
    >
      Move All To Cart
    </button>
  );
};
