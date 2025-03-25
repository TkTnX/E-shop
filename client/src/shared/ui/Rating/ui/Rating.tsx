import { Star } from "lucide-react";
import s from "./s.module.scss";

type Props = {
    rating: number;
    className?: string
};

export const Rating = ({ rating, className }: Props) => {
  return (
    <div className={`${s.rating} ${className}`}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star stroke="#ffad33" fill="#ffad33" key={index} size={16} />
      ))}
      {Array.from({ length: 5 - rating }).map((_, index) => (
        <Star stroke="#bfbfbf" fill="#bfbfbf" key={index} size={16} />
      ))}
    </div>
  );
};
