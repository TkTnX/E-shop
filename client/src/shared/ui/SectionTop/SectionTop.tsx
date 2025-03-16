import { SliderButtons } from "@/features/Slider";
import { Hint } from "../Hint";
import s from "./s.module.scss";
import SwiperCore from "swiper";
type Props = {
  hintTitle: string;
  title: string;
  swiperInstance: SwiperCore | null;
};
export const SectionTop = ({ hintTitle, title, swiperInstance }: Props) => {
  return (
    <div className={s.top}>
      <Hint title={hintTitle} />
      <div className={s.wrapper}>
        <h2 className={s.title}>{title}</h2>
        <SliderButtons swiperInstance={swiperInstance}  />
      </div>
    </div>
  );
};
