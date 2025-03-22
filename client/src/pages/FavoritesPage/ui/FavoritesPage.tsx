import { FavoritesEmpty, FavoritesTop } from "@/widgets/Favorites";
import s from "./s.module.scss";
import { Slider } from "@/features/Slider";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../api/getFavorites";
import { FavoriteItemType } from "@/app/types";
import { favoritesStore } from "@/widgets/Favorites/model/FavoritesStore";

export const FavoritesPage = () => {
  const { setFavorites } = favoritesStore;
  const { data, isPending, error } = useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      const items = await getFavorites();
      setFavorites(items.map((item: FavoriteItemType) => item.product));
      return items;
    },
  });

  if (error) return <h1 className={s.error}>{error.message}</h1>;
  if (data?.length === 0 && !isPending) return <FavoritesEmpty />;

  return (
    <div className={`container ${s.wrapper}`}>
      <FavoritesTop />

      <Slider
        items={data?.map((item: FavoriteItemType) => item.product)}
        isPending={isPending}
      />
    </div>
  );
};
