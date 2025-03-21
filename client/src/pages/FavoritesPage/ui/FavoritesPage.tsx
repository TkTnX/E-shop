import { FavoritesTop } from "@/entities/Favorites";
import s from "./s.module.scss";
import { Slider } from "@/features/Slider";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../api/getFavorites";
import { FavoriteItemType } from "@/app/types";
import { favoritesStore } from "@/entities/Favorites/model/FavoritesStore";

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
  console.log(data);

  if (error) return <h1 className={s.error}>{error.message}</h1>;
  if (data?.length === 0 && !isPending)
    // TODO: Отображать что-то красивое
    return <h1 className={s.error}>Favorites is empty</h1>;

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
