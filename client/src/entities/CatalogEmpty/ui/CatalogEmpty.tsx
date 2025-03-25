import { Button } from "@/shared/ui/Button";
import s from "./s.module.scss";
import { useSearchParams } from "react-router";
export const CatalogEmpty = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div className={s.wrapper}>
      <h1>Ooops...</h1>
      <p>There are no products in this category</p>
      <Button onClick={() => setSearchParams({})}>Clear filters</Button>
    </div>
  );
};
