import { FavoriteItemType } from "@/app/types";
import { getFavorites } from "@/pages/FavoritesPage";
import { makeAutoObservable } from "mobx";

class FavoritesStore {
  favorites: FavoriteItemType[] = [];
  loading = false;
  error = "";
  constructor() {
    makeAutoObservable(this);
  }

  fetchFavorites = async () => {
    try {
      const res = await getFavorites();
      this.favorites = res;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) this.error = error.message;
    }
  };

  setFavorites = (favorites: FavoriteItemType[]) => {
    this.favorites = favorites;
  };

  removeFavoriteItem = (productId: number) => {
    this.favorites = this.favorites.filter((item) => item._id !== productId);
  };
}

export const favoritesStore = new FavoritesStore();
