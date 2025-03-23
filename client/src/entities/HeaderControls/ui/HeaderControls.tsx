import { HeaderSearch } from "@/features/HeaderSearch";
import s from "./s.module.scss";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";
import { userStore } from "@/features/Auth";
import { useEffect, useState } from "react";
import { HeaderDropdown } from "./HeaderDropdown";
import { favoritesStore } from "@/widgets/Favorites/model/FavoritesStore";
import { Badge } from "@/widgets/Badge";
import { cartStore, getCart } from "@/widgets/Cart";
export const HeaderControls = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, login } = userStore;
  const { fetchFavorites, favorites } = favoritesStore;
  const { cart, setCart } = cartStore;

  useEffect(() => {
    const checkUser = async () => {
      await fetchFavorites();
      const cart = await getCart();
      setCart(cart);
      if (user) {
        setAuthenticated(true);
      } else {
        const user = await login();
        if (user) setAuthenticated(true);
      }
    };
    checkUser();
  }, [fetchFavorites, login, setCart, user]);
  
  return (
    <div className={s.controls}>
      <HeaderSearch />
      <Link className={s.link} to="/favorites">
        <Heart />
        {favorites.length > 0 && <Badge quantity={favorites.length} />}
      </Link>
      <Link className={s.link} to="/cart">
        <ShoppingCart />
        {cart && cart.products.length > 0 && (
          <Badge quantity={cart.products.length} />
        )}
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
