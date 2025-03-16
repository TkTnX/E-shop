import { Link } from "react-router";
import s from "./s.module.scss"
type Props = {
  category: {
    name: string;
    href: string;
  };
};

export const HeroSidebarItem = ({ category }: Props) => {
  return <Link className={s.item} to={category.href}>{category.name}</Link>;
};
