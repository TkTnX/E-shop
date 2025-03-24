import { FavoritesEmpty, FavoritesTop } from "@/widgets/Favorites";
import s from "./s.module.scss";
import { Slider } from "@/features/Slider";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../api/getFavorites";
import { FavoriteItemType } from "@/app/types";
import { favoritesStore } from "@/widgets/Favorites/model/FavoritesStore";
import { userStore } from "@/features/Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const FavoritesPage = () => {
  const { user } = userStore;
  const navigate = useNavigate();
  const { setFavorites } = favoritesStore;

  useEffect(() => {
    if (!user) navigate("/");
  }, [navigate, user]);

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
