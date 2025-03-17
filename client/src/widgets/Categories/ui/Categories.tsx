import { SectionTop } from "@/shared/ui/SectionTop";
import s from "./s.module.scss";
import { CategoriesList } from "@/entities/CategoriesList";
export const Categories = () => {
  return (
    <section className={s.wrapper}>
      <SectionTop hintTitle="Categories" title="Browse By Category" />
      <CategoriesList />
    </section>
  );
};
