import { AuthForm } from "@/features/Auth";
import s from "./s.module.scss";

export const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <img src="/images/general/signUp.jpg" alt="login" />
      </div>
      <AuthForm type="login" />
    </div>
  );
};
