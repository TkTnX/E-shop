import { Slider } from "@/features/Slider";
import s from "./s.module.scss";
import { SectionTop } from "@/shared/ui/SectionTop";
import { useState } from "react";
import SwiperCore from "swiper";

export const Sales = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  return (
    <section className={s.wrapper}>
      <SectionTop
        swiperInstance={swiperInstance}
        title="Flash Sales"
        hintTitle="Today's"
      />
      <Slider setSwiperInstance={setSwiperInstance} items={[]} />
    </section>
  );
};
