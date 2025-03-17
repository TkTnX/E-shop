import { Link } from "react-router";
import s from "./s.module.scss";
import { BannerTimer } from "@/entities/BannerTimer";

export const Banner = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.left}>
        <p className={s.hint}>Categories</p>
        <h3 className={s.title}>Enhance Your Music Experience</h3>
        {/* timer */}
        <BannerTimer />

        <Link className={s.link} to="/catalog">
          Buy Now!
        </Link>
      </div>
      <div className={s.image}>
        <img src="/images/general/boombox.png" />
      </div>
    </section>
  );
};
