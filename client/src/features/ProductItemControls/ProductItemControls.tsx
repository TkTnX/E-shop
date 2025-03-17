import { Eye, Heart } from "lucide-react";
import s from "./s.module.scss";
import { Link } from "react-router";
import { ProductItemType } from "@/app/types";

type Props = {
    item: ProductItemType;
};

export const ProductItemControls = ({ item }: Props) => {
  return (
    <div className={s.buttons}>
      <div className={s.controls}>
        <button>
          <Heart />
        </button>
        <Link to={`/product/${item._id}`}>
          <Eye />
        </Link>
      </div>
      <button className={`addToCart ${s.addToCart}`}>Add to cart</button>
    </div>
  );
};
