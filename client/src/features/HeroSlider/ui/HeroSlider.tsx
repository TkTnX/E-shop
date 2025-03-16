import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import s from "./s.module.scss";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import { SLIDER_ITEMS } from "./config";
import { HeroSlide } from "./HeroSlide";
export const HeroSlider = () => {
  return (
    <Swiper
      style={{
        //   @ts-ignore
        "--swiper-pagination-bullet-inactive-color": "#7f7f7f",
        "--swiper-pagination-color": "#db4444",
      }}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className={s.slider}
      slidesPerView={1}
    >
      {SLIDER_ITEMS.map((slide, index) => (
        <SwiperSlide key={index}>
          <HeroSlide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
