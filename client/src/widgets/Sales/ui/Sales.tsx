import { Slider } from "@/features/Slider";
import s from "./s.module.scss";
import { SectionTop } from "@/shared/ui/SectionTop";
import { useState } from "react";
import SwiperCore from "swiper";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { getProducts } from "@/shared/api/products";

export const Sales = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const { data, error, isPending } = useQuery({
    queryKey: ["sales"],
    queryFn: () => getProducts({ discount: "true" }),
  });

  if (error) return <h1>{error.message}</h1>;

  return (
    <section className={s.wrapper}>
      <SectionTop
        swiperInstance={swiperInstance}
        title="Flash Sales"
        hintTitle="Today's"
      />
      <Slider
        setSwiperInstance={setSwiperInstance}
        isPending={isPending}
        items={data}
      />
      <Link to="/catalog" className={s.link}>
        View All Products
      </Link>
    </section>
  );
};
