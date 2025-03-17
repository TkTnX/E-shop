import { useEffect, useState } from "react";
import s from "./s.module.scss";
export const BannerTimer = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const deadline = "December, 31, 2025";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setTimer({
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: Math.floor((time / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((time / 1000 / 60) % 60),
      seconds: Math.floor((time / 1000) % 60),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={s.timer}>
      <div className={s.time}>
        <b>{timer.days}</b>
        <span>Days</span>
      </div>
      <div className={s.time}>
        <b>{timer.hours}</b>
        <span>Hours</span>
      </div>
      <div className={s.time}>
        <b>{timer.minutes}</b>
        <span>Minutes</span>
      </div>
      <div className={s.time}>
        <b>{timer.seconds}</b>
        <span>Seconds</span>
      </div>
    </div>
  );
};
