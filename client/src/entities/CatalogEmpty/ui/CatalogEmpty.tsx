import { Button } from "@/shared/ui/Button";
import s from "./s.module.scss";
import { catalogStore } from "@/widgets/Catalog";
export const CatalogEmpty = () => {
  const { clearFilters } = catalogStore;
  return (
    <div className={s.wrapper}>
      <h1>Ooops...</h1>
      <p>There are no products in this category</p>
      <Button onClick={clearFilters}>Clear filters</Button>
    </div>
  );
};
