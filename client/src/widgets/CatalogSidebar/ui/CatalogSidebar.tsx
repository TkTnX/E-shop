import { ChangeCategoryButton } from "@/features/ChangeCategoryButton/ui/ChangeCategoryButton";
import { CATALOG_SIDEBAR_CATEGORIES } from "./config";
import s from "./s.module.scss";
export const CatalogSidebar = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.categories}>
        {CATALOG_SIDEBAR_CATEGORIES.map((category, index) => (
          <ChangeCategoryButton item={category} key={index} />
        ))}
      </div>
    </div>
  );
};
