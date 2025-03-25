import s from "./s.module.scss";
export const CategoryPriceInput = () => {


  return (
    <div className={s.wrapper}>
      <input
        //   TODO: Find max and min price
        max={1000}
        min={50}
        type="range"
        className={s.input}
      />
      <div className={s.maxMin}>
        <p>50</p>
        <p>1000</p>
      </div>
    </div>
  );
};
