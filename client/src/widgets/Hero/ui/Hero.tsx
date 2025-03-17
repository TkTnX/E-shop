import { HeroSidebar } from "@/entities/HeroSidebar";
import s from "./s.module.scss";
import { HeroSlider } from "@/features/HeroSlider";
export const Hero = () => {
  return (
    <section className={s.wrapper}>
      <HeroSidebar />
      <HeroSlider />
    </section>
  );
};
