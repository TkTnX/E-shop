import { HeaderSearch } from "@/features/HeaderSearch";
import s from "./s.module.scss";
import { Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";
import { userStore } from "@/features/Auth";
import { useEffect, useState } from "react";
export const HeaderControls = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const { user, login } = userStore;
  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        setAuthenticated(true);
        return;
      }

      login()
        .then((user) => user && setAuthenticated(true))
        .catch((error) => console.error(error));
    };
    checkUser();
  }, [login, user]);
  console.log(user);
  return (
    <div className={s.controls}>
      <HeaderSearch />
      <Link className={s.link} to="/favorites">
        <Heart />
      </Link>
      <Link className={s.link} to="/cart">
        <ShoppingCart />
      </Link>
      <Link className={s.link} to={authenticated ? "/profile" : "/sign-up"}>
        {authenticated ? (
          <img width={24} height={24} src="/images/general/noAvatar.png" />
        ) : (
          <User />
        )}
      </Link>
    </div>
  );
};
