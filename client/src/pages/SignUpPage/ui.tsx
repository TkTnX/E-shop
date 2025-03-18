import { AuthForm } from "@/features/Auth";
import s from "./s.module.scss";

export const SignUpPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <img src="/images/general/signUp.jpg" alt="signUp" />
      </div>
      <AuthForm type="signUp" />
    </div>
  );
};
