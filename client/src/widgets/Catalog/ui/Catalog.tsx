import { useQuery } from "@tanstack/react-query";
import s from "./s.module.scss";
import { useSearchParams } from "react-router";
import { getProducts } from "../api";
import { Loader } from "@/shared/ui/Loader";
import { ProductItemType } from "@/app/types";
import { ProductItem } from "@/entities/ProductItem";
import { ProductItemControls } from "@/features/ProductItemControls";
import { CatalogEmpty } from "@/entities/CatalogEmpty";
import { useEffect } from "react";
import { catalogStore } from "../model";

type Props = {
  setMaxAndMinPrice: (nums: number[]) => void;
};

export const Catalog = ({ setMaxAndMinPrice }: Props) => {
  const [searchParams] = useSearchParams();
  const { params } = catalogStore;
  const { data, isPending, error } = useQuery({
    queryKey: ["catalog", params],
    queryFn: () => getProducts(searchParams),
  });

  useEffect(() => {
    if (data) {
      const minPrice = Math.min(...data.map((p: ProductItemType) => p.price));
      const maxPrice = Math.max(...data.map((p: ProductItemType) => p.price));
      setMaxAndMinPrice([minPrice, maxPrice]);
    }
  }, [data, setMaxAndMinPrice]);

  if (isPending) return <Loader />;
  if (error) return <div>Error! {error.message}</div>;
  if (!isPending && !data.length) return <CatalogEmpty />;
  return (
    <div className={s.wrapper}>
      {searchParams.get("q") && (
        <p className={s.searchResults}>Search by: {searchParams.get("q")}</p>
      )}
      {searchParams.get("cat") && (
        <p className={s.searchResults}>
          Category: {searchParams.get("cat") || searchParams.get("q")}
        </p>
      )}
      <div className={s.list}>
        {data.map((product: ProductItemType) => (
          <ProductItem
            actions={<ProductItemControls item={product} />}
            key={product._id}
            item={product}
            className={s.item}
          />
        ))}
      </div>
    </div>
  );
};
