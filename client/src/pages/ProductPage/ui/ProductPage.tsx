import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";
import { useParams } from "react-router";
import { BigProduct } from "@/widgets/BigProduct";
import { Loader } from "@/shared/ui/Loader";

export const ProductPage = () => {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProducts(id!),
  });

  if (isPending) return <Loader />;

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
