import { useNavigate, useSearchParams } from "react-router";
import s from "./s.module.scss";

type Props = {
  item: { title: string; value: string };
};

// TODO: Доделать

export const ChangeCategoryButton = ({ item }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const onChangeCategory = () => {
    setSearchParams({ category: item.value });
    navigate(`/catalog?category=${searchParams.get("category")}`);
  };

  return (
    <button onClick={onChangeCategory} className={s.btn}>
      {item.title}
    </button>
  );
};
