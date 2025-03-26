import { useSearchParams } from "react-router";
import s from "./s.module.scss";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { catalogStore } from "@/widgets/Catalog";

type Props = {
  maxAndMinPrice: number[];
};

export const CategoryPriceInput = ({ maxAndMinPrice }: Props) => {
  const [, setSearchParams] = useSearchParams();
  const { params, setParams, priceTo, setPriceTo } = catalogStore;
  const [value, setValue] = useState<string | null>(null);
  const [debouncedValue] = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue) {
      setParams("priceTo", debouncedValue);
      setPriceTo(Number(debouncedValue));
      setSearchParams(params);
    }
  }, [debouncedValue]);

  return (
    <div className={s.wrapper}>
      <input
        //   TODO: Find max and min price
        max={maxAndMinPrice[1]}
        min={maxAndMinPrice[0]}
        type="range"
        className={s.input}
        value={String(value)}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={s.maxMin}>
        <p>${maxAndMinPrice[0]}</p>
        <p className={s.value}>
          {!value || !priceTo ? `unset` : `$${priceTo}`}
        </p>

        <p>${maxAndMinPrice[1]}</p>
      </div>
    </div>
  );
};
