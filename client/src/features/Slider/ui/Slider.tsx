import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { SALES_ITEMS } from "./config";
import { ProductItem } from "@/shared/ui/ProductItem";
import { ProductItemType } from "@/app/types";
import { ProductItemControls } from "@/features/ProductItemControls";
import s from "./s.module.scss";
// @ts-ignore
import "swiper/css";
type Props = {
  items: ProductItemType[];
  setSwiperInstance: (swiper: SwiperCore) => void;
};

export const Slider = ({ items, setSwiperInstance }: Props) => {
  console.log(items);
  return (
    <Swiper
      onSwiper={setSwiperInstance}
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        475: {
          slidesPerView: 2,
        },
        860: {
          slidesPerView: 3,
        },
        1130: {
          slidesPerView: 4,
        },
      }}
      className={s.slider}
    >
      {SALES_ITEMS.map((sale: ProductItemType) => (
        <SwiperSlide key={sale.id}>
          <ProductItem
            actions={<ProductItemControls item={sale} />}
            item={sale}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
