import { ChangeCategoryButton } from "@/features/ChangeCategoryButton/ui/ChangeCategoryButton";
import { CATALOG_SIDEBAR_CATEGORIES } from "./config";
import s from "./s.module.scss";
import { CategoryPriceInput } from "@/features/CategoryPriceInput";
import { useSearchParams } from "react-router";
import { Button } from "@/shared/ui/Button";
import { catalogStore } from "@/widgets/Catalog/model";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

type Props = {
  maxAndMinPrice: number[];
};

export const CatalogSidebar = observer(({ maxAndMinPrice }: Props) => {
  const [, setSearchParams] = useSearchParams();
  const { params, setParams, clearFilters } = catalogStore;
  const changeCategory = (category: string) => {
    setParams("cat", category);
  };

  useEffect(() => {
    setSearchParams(params);
  }, [params, setSearchParams]);

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
        <CategoryPriceInput maxAndMinPrice={maxAndMinPrice} />
      </div>
      {params && <Button onClick={clearFilters}>Clear filters</Button>}
    </div>
  );
});
