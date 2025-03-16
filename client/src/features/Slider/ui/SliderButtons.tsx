import { ArrowLeft, ArrowRight } from "lucide-react";
import s from "./s.module.scss";
import SwiperCore from "swiper"
type Props = {
  swiperInstance: SwiperCore | null;
};

export const SliderButtons = ({ swiperInstance }: Props) => {
  return (
    <div className={s.buttons}>
      
      <button onClick={() => swiperInstance?.slidePrev()}>
        <ArrowLeft />
      </button>
      <button onClick={() => swiperInstance?.slideNext()}>
        <ArrowRight />
      </button>
    </div>
  );
};
