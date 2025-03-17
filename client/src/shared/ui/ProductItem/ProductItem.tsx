import { ProductItemType } from "@/app/types";
import s from "./s.module.scss";
import { Star } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router";
type Props = {
  item: ProductItemType;
  actions: ReactNode;
};

export const ProductItem = ({ item, actions }: Props) => {
  return (
    <div className={s.item}>
      <div className={s.imgWrapper}>
        {item.discount && (
          <p className={s.discountLabel}>-{item.discount * 100}%</p>
        )}
        <img src={item.img} alt={item.title} />
        {actions}
      </div>

      <Link className={s.link} to={`/product/${item._id}`}>
        <h4 className={s.title}>{item.title}</h4>
        <p className={s.price}>
          {item.discount ? (
            <>
              <span className={s.discount}>
                {item.price - item.price * item.discount}$
              </span>
              <span className={s.discountDefaultPrice}>{item.price}$</span>
            </>
          ) : (
            `${item.price}$`
          )}
        </p>
        <div className={s.rating}>
          {Array.from({ length: item.rating }).map((_, index) => (
            <Star stroke="#ffad33" fill="#ffad33" key={index} size={16} />
          ))}
          {Array.from({ length: 5 - item.rating }).map((_, index) => (
            <Star stroke="#bfbfbf" fill="#bfbfbf" key={index} size={16} />
          ))}
        </div>
      </Link>
    </div>
  );
};
