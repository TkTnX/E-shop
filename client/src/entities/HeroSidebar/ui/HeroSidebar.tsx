import { SIDEBAR_CATEGORIES } from "./config";
import { HeroSidebarItem } from "./HeroSidebarItem";
import s from "./s.module.scss"
export const HeroSidebar = () => {
  return (
    <div className={s.list}>
      {SIDEBAR_CATEGORIES.map((category, index) => (
        <HeroSidebarItem key={index} category={category} />
      ))}
    </div>
  );
};
