import { ProductItemType } from "@/app/types";
import s from "./s.module.scss";
import { BigProductControls } from "@/features/BigProductControls";
import { Rating } from "@/shared/ui/Rating";
import { RelatedProducts } from "@/widgets/RelatedProducts";

type Props = {
  product: ProductItemType;
};

export const BigProduct = ({ product }: Props) => {
  return (
    <>
      <section className={s.item}>
        <div className={s.itemImg}>
          <img src={product.img} />
        </div>
        <div>
          <div className={s.top}>
            <h2>{product.title}</h2>
            <Rating className={s.rating} rating={product.rating} />
            <p className={s.price}>
              $
              {product.discount ? (
                <>
                  {product.price - product.price * product.discount}{" "}
                  <span>${product.price}</span>
                </>
              ) : (
                product.price
              )}
            </p>
            <p className={s.desc}>{product.description}</p>
          </div>
          {/* Features controls */}
          <BigProductControls product={product} />

          {/* Delivery Info */}
          <div className={s.delivery}>
            <div className={s.deliveryItem}>
              <img src="/images/general/delivery.svg" alt="Delivery" />
              <div className={s.deliveryText}>
                <h6>Free Delivery</h6>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className={s.deliveryItem}>
              <img src="/images/general/return.svg" alt="Return" />
              <div className={s.deliveryText}>
                <h6>Return Delivery</h6>
                <p>Free 30 Days Delivery Returns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts cat={product.category} />
    </>
  );
};
