import { Link } from "react-router";
import s from "./s.module.scss";
export const FavoritesEmpty = () => {
  return (
    <div className={s.empty}>
      <h2>Favorites is Empty! 🙄</h2>
      <Link to={"/catalog"}>Find something you like</Link>
    </div>
  );
};
