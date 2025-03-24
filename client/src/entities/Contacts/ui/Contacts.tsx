import s from "./s.module.scss";
export const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <div className={s.top}>
          <img src="/images/general/phone.svg" alt="Phone" />
          <h6>Call To Us</h6>
        </div>
        <p className={s.text}>We are available 24/7, 7 days a week.</p>
        <p className={s.text}>Phone: +8801611112222</p>
      </div>
      <div className={s.item}>
        <div className={s.top}>
          <img src="/images/general/mail.svg" alt="Mail" />
          <h6>Write To Us</h6>
        </div>
        <p className={s.text}>
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className={s.text}>Emails: customer@exclusive.com</p>
        <p className={s.text}>Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};
