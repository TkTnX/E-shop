import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import s from "./s.module.scss";
type Props = {
  slide: {
    href: string;
    img: string;
  };
};

export const HeroSlide = ({ slide }: Props) => {
  return (
    <div className={s.slide}>
      <img src={slide.img} alt="slide" />
      <Link className={s.link} to={slide.href}>
        <span>Shop Now</span> <ArrowRight />
      </Link>
    </div>
  );
};
