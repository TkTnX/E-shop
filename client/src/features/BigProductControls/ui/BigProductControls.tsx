import { AddToCart, FavoriteButton } from "@/features/ProductItemControls";
import s from "./s.module.scss";
import { ProductItemType } from "@/app/types";

type Props = {
  product: ProductItemType;
};

export const BigProductControls = ({ product }: Props) => {
  return (
    <div className={s.wrapper}>
      <AddToCart className={s.addToCartBtn} product={product} />
      <FavoriteButton className={s.addToFavoritesBtn} productId={product._id} />
    </div>
  );
};
