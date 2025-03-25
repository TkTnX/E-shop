import { useQuery } from "@tanstack/react-query";
import s from "./s.module.scss";
import { useSearchParams } from "react-router";
import { getProducts } from "../api";
import { Loader } from "@/shared/ui/Loader";
import { ProductItemType } from "@/app/types";
import { ProductItem } from "@/entities/ProductItem";
import { ProductItemControls } from "@/features/ProductItemControls";
import { CatalogEmpty } from "@/entities/CatalogEmpty";

// TODO: Фильтрация по цене

export const Catalog = () => {
  const [searchParams] = useSearchParams();

  const { data, isPending, error } = useQuery({
    queryKey: ["catalog", searchParams.get("cat"), searchParams.get("q")],
    queryFn: () => getProducts(searchParams),
  });

  if (isPending) return <Loader />;
  if (error) return <div>Error! {error.message}</div>;
  if (!isPending && !data.length) return <CatalogEmpty />;
  return (
    <div className={s.wrapper}>
      {searchParams.get("cat") ||
        (searchParams.get("q") && (
          // TODO: Сделать отображение search by чтобы одновременно показывать и category и search
          <p className={s.searchResults}>
            Search by: {searchParams.get("cat") || searchParams.get("q")}
          </p>
        ))}
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
