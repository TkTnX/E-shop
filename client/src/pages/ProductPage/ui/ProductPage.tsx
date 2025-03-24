import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router";
import { BigProduct } from "@/widgets/BigProduct";

export const ProductPage = () => {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProducts(id!),
  });

  if (isPending)
    return (
      <div className={s.loader}>
        <div className={s.loaderImg}>
          <Loader2 size={50} />
        </div>
      </div>
    );

  if (error) return <div>Error! {error.message}</div>;
  return (
    <div className={`container ${s.wrapper}`}>
      <Breadcrumbs
        steps={[
          { name: "Home", href: "/" },
          { name: data.category, href: `/catalog?cat=${data.category}` },
          { name: data.title },
        ]}
      />

      <BigProduct product={data} />
    </div>
  );
};
