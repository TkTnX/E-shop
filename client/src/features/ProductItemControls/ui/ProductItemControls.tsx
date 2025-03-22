import { Eye } from "lucide-react";
import s from "./s.module.scss";
import { Link } from "react-router";
import { ProductItemType } from "@/app/types";
import { FavoriteButton } from "./FavoriteButton";
import { AddToCart } from "./AddToCart";

type Props = {
  item: ProductItemType;
};

export const ProductItemControls = ({ item }: Props) => {
  return (
    <div className={s.buttons}>
      <div className={s.controls}>
        <FavoriteButton productId={item._id} />
        <Link to={`/product/${item._id}`}>
          <Eye />
        </Link>
      </div>
      <AddToCart product={item} />
    </div>
  );
};
