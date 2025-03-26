import { CatalogSidebar } from "@/widgets/CatalogSidebar";
import s from "./s.module.scss";
import { Catalog } from "@/widgets/Catalog";
import { useState } from "react";
export const CatalogPage = () => {
  const [maxAndMinPrice, setMaxAndMinPrice] = useState([0, 0]);
  return (
    <div className={`container ${s.wrapper}`}>
      <CatalogSidebar maxAndMinPrice={maxAndMinPrice} />

      <Catalog setMaxAndMinPrice={setMaxAndMinPrice} />
    </div>
  );
};
