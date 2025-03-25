import { favoritesStore } from "@/widgets/Favorites/model/FavoritesStore";
import { switchFavorites } from "@/pages/FavoritesPage/api/switchFavorites";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import s from "./s.module.scss";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { FavoriteItemType } from "@/app/types";
type Props = {
  productId: number;
  className?: string;
};

export const FavoriteButton = observer(({ productId, className }: Props) => {
  const { favorites, removeFavoriteItem, setFavorites } = favoritesStore;
  const [isFavorited, setIsFavorited] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    setIsFavorited(
      favorites?.some((item) => item.product?._id === productId) ||
        favorites?.some((item) => item._id === productId)
    );
  }, [favorites, favorites?.length, productId]);

  const mutation = useMutation({
    mutationFn: switchFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
      if (isFavorited) {
        setFavorites(
          favorites.filter((item) => item.product._id !== productId)
        );
      } else {
        setFavorites([
          ...favorites,
          { product: { _id: productId } } as FavoriteItemType,
        ]);
      }
      removeFavoriteItem(productId);
    },
  });

  return (
    <button
      className={`${s.favoriteButton} ${className}`}
      onClick={() => mutation.mutate(productId)}
      disabled={mutation.isPending}
    >
      <Heart
        fill={isFavorited ? "#db4444" : "none"}
        stroke={isFavorited ? "#db4444" : "#000"}
      />
    </button>
  );
});
