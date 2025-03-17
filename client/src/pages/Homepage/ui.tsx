import { Hero } from "@/widgets/Hero";
import s from "./s.module.scss";
import { Sales } from "@/widgets/Sales";
import { Categories } from "@/widgets/Categories/ui";
import { BestSelling } from "@/widgets/BestSelling";
import { Banner } from "@/widgets/Banner/ui";
export const Homepage = () => {
  return (
    <main className={s.container}>
      <Hero />
      <Sales />
      <Categories />
      <BestSelling />
      <Banner />
    </main>
  );
};
