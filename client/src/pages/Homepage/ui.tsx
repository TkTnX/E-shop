import { Hero } from "@/widgets/Hero";
import s from "./s.module.scss";
import { Sales } from "@/widgets/Sales";
export const Homepage = () => {
  return (
    <main className={s.container}>
      <Hero />
      <Sales />
    </main>
  );
};
