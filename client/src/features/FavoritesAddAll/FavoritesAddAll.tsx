import { useMutation } from "@tanstack/react-query";
import { favoritesStore } from "@/widgets/Favorites";
import { addToCart } from "@/widgets/Cart";
import { ProductItemType } from "@/app/types";
import { toast } from "react-toastify";
import { Button } from "@/shared/ui/Button";
export const FavoritesAddAll = () => {
  const { favorites } = favoritesStore;
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
    <Button disabled={mutation.isPending} onClick={() => mutation.mutate()}>
      Move All To Cart
    </Button>
  );
};
