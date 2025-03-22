import { HeaderSearch } from "@/features/HeaderSearch";
import s from "./s.module.scss";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";
import { userStore } from "@/features/Auth";
import { useEffect, useState } from "react";
import { HeaderDropdown } from "./HeaderDropdown";
import { favoritesStore } from "@/widgets/Favorites/model/FavoritesStore";
export const HeaderControls = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, login } = userStore;
  const { fetchFavorites } = favoritesStore;

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        setAuthenticated(true);
      } else {
        const user = await login();
        if (user) setAuthenticated(true);
      }
      await fetchFavorites();
    };
    checkUser();
  }, [fetchFavorites, login, user]);

  return (
    <div className={s.controls}>
      <HeaderSearch />
      <Link className={s.link} to="/favorites">
        <Heart />
      </Link>
      <Link className={s.link} to="/cart">
        <ShoppingCart />
      </Link>
      {authenticated ? (
        <div className={s.dropdownWrapper}>
          <button onClick={() => setOpen((prev) => !prev)} className={s.link}>
            <img
              className={s.avatar}
              src={user?.img || "/images/general/noAvatar.png"}
            />
          </button>
          {open && (
            <HeaderDropdown
              setAuthenticated={setAuthenticated}
              setOpen={setOpen}
            />
          )}
        </div>
      ) : (
        <Link className={s.link} to={"/sign-up"}>
          <User />
        </Link>
      )}
    </div>
  );
};
