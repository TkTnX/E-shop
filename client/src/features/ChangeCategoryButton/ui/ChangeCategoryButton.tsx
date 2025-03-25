import { useSearchParams } from "react-router";
import s from "./s.module.scss";

type Props = {
  item: { title: string; value: string };
  changeCategory: (category: string) => void;
};

export const ChangeCategoryButton = ({ item, changeCategory }: Props) => {
  const [searchParams] = useSearchParams();

  return (
    <button
      onClick={() => changeCategory(item.value)}
      className={`${s.btn} ${
        searchParams.get("category") === item.value && s.active
      }`}
    >
      {item.title}
    </button>
  );
};
