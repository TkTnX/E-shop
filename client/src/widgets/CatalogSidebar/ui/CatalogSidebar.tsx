import { ChangeCategoryButton } from "@/features/ChangeCategoryButton/ui/ChangeCategoryButton";
import { CATALOG_SIDEBAR_CATEGORIES } from "./config";
import s from "./s.module.scss";
import { CategoryPriceInput } from "@/features/CategoryPriceInput";
import { useSearchParams } from "react-router";
import { Button } from "@/shared/ui/Button";
export const CatalogSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeCategory = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("cat", category);
    setSearchParams(newParams);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <b>Categories</b>
        <div className={s.list}>
          {CATALOG_SIDEBAR_CATEGORIES.map((category, index) => (
            <ChangeCategoryButton
              changeCategory={changeCategory}
              item={category}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className={s.block}>
        <b>Price</b>
        <CategoryPriceInput />
      </div>
      {searchParams.get("cat") && (
        <Button onClick={() => setSearchParams({})}>Clear filters</Button>
      )}
    </div>
  );
};
