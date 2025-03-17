import s from "./s.module.scss"
import { Link } from "react-router";
import { CATEGORIES } from "../constants";

export const CategoriesList = () => {
  return (
    <div className={s.list}>
      {CATEGORIES.map((category, index) => (
        <Link className={s.link} to={category.href} key={index}>
          <img src={category.img} alt={category.title} />
          <p>{category.title}</p>
        </Link>
      ))}
    </div>
  );
};
