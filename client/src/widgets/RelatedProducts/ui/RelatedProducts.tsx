import { Hint } from "@/shared/ui/Hint";
import s from "./s.module.scss";
import { Slider } from "@/features/Slider";
import { useQuery } from "@tanstack/react-query";
import { getRelatedProducts } from "../api";

type Props = {
  cat: string;
};

export const RelatedProducts = ({ cat }: Props) => {
  const { data, isPending, error } = useQuery({
    queryKey: ["relatedProducts", cat],
    queryFn: () => getRelatedProducts(cat),
  });

  if (error) return <div>Error! {error.message}</div>;
  return (
    <section className={s.wrapper}>
      <Hint title="Related Items" />
      <Slider isPending={isPending} items={data} />
    </section>
  );
};
