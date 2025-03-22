import { FavoritesAddAll } from "@/features/FavoritesAddAll";
import s from "./s.module.scss";
import {favoritesStore} from "../model/FavoritesStore";

export const FavoritesTop = () => {
  const { favorites } = favoritesStore;
  return (
    <div className={s.top}>
      <h4 className={s.title}>
        Favorites <span>({favorites.length || 0})</span>
      </h4>
      <FavoritesAddAll  />
    </div>
  );
};
