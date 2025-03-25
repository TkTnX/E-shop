import { CatalogSidebar } from "@/widgets/CatalogSidebar";
import s from "./s.module.scss";
import { Catalog } from "@/widgets/Catalog";
export const CatalogPage = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <CatalogSidebar />

      <Catalog />
    </div>
  );
};
