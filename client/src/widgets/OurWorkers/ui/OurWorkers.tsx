import { OUR_WORKERS_CONFIG } from "./config";
import s from "./s.module.scss";
export const OurWorkers = () => {
  return (
    <section className={s.wrapper}>
      {OUR_WORKERS_CONFIG.map((item, index) => (
        <div key={index} className={s.item}>
          <div className={s.itemImg}>
            <img src={item.img} alt={item.name} />
          </div>
          <h5>{item.name}</h5>
          <p>{item.position}</p>
          <div className={s.socials}>
            <a href="#!">
              <img src="/images/general/socials/twitter.svg" />
            </a>
            <a href="#!">
              <img src="/images/general/socials/instagram.svg" />
            </a>
            <a href="#!">
              <img src="/images/general/socials/linkedin.svg" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};
