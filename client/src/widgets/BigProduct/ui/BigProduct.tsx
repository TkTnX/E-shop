import { ProductItemType } from "@/app/types";
import s from "./s.module.scss";

type Props = {
  product: ProductItemType;
};

export const BigProduct = ({ product }: Props) => {
  return (
    <div className={s.item}>
      <div>
        <img src={product.img} />
      </div>
      <div>
        <div className={s.top}>
          <h2>{product.title}</h2>
          {/* TODO: Тут должен быть рейтинг */}
          <div></div>
          <p>
            {product.discount ? (
              <>
                {product.price - product.price * product.discount}{" "}
                <span>{product.price}</span>
              </>
            ) : (
              product.price
            )}
          </p>
          <p>{product.description}</p>
        </div>
        {/* Features controls */}
        <div></div>
      </div>
    </div>
  );
};
