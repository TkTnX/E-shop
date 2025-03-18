import { BENEFITS } from "./config";
import s from "./s.module.scss";
export const Benefits = () => {
  return (
    <section className={s.wrapper}>
      {BENEFITS.map((item, index) => (
        <div className={s.item} key={index}>
          <img src={item.img} alt={item.title} />
          <h5>{item.title}</h5>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};
