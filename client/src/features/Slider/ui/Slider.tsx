import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { ProductItem } from "@/shared/ui/ProductItem";
import { ProductItemType } from "@/app/types";
import { ProductItemControls } from "@/features/ProductItemControls";
import s from "./s.module.scss";
// @ts-ignore
import "swiper/css";
import { ProductSkeleton } from "@/shared/ui/ProductSkeleton";
type Props = {
  items: ProductItemType[];
  setSwiperInstance: (swiper: SwiperCore) => void;
  isPending?: boolean;
};

export const Slider = ({
  items,
  setSwiperInstance,
  isPending = false,
}: Props) => {
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
      {!isPending
        ? items.map((item: ProductItemType) => (
            <SwiperSlide key={item._id}>
              <ProductItem
                actions={<ProductItemControls item={item} />}
                item={item}
              />
            </SwiperSlide>
          ))
        : [...new Array(6)].map((_, index) => (
            <SwiperSlide>
              <ProductSkeleton key={index} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};
