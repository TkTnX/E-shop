import s from "./s.module.scss";
import { Hero } from "@/widgets/Hero";
import { Sales } from "@/widgets/Sales";
import { Categories } from "@/widgets/Categories";
import { BestSelling } from "@/widgets/BestSelling";
import { Benefits } from "@/widgets/Benefits";
import { Banner } from "@/widgets/Banner";
export const Homepage = () => {
  return (
    <main className={s.container}>
      <Hero />
      <Sales />
      <Categories />
      <BestSelling />
      <Banner />
      <Benefits />
    </main>
  );
};
