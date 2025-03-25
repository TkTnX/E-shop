import { CatalogSidebar } from "@/widgets/CatalogSidebar";
import s from "./s.module.scss";
export const CatalogPage = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <CatalogSidebar />

      <div>CATALOG</div>
    </div>
  );
};
