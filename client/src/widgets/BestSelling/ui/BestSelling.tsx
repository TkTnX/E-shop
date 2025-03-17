import { SectionTop } from "@/shared/ui/SectionTop";
import s from "./s.module.scss";
import SwiperCore from "swiper";
import { useState } from "react";
import { Slider } from "@/features/Slider";
import { getProducts } from "@/shared/api/products";
import { useQuery } from "@tanstack/react-query";
export const BestSelling = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const { data, error, isPending } = useQuery({
    queryKey: ["bestSelling"],
    queryFn: () => getProducts({ rating: "4" }),
  });

  if (error) return <div>Error! {error.message}</div>;

  return (
    <section className={s.wrapper}>
      <SectionTop
        swiperInstance={swiperInstance}
        hintTitle="This Month"
        title="Best Selling Products"
      />
      <Slider
        items={data}
        isPending={isPending}
        setSwiperInstance={setSwiperInstance}
      />
    </section>
  );
};
