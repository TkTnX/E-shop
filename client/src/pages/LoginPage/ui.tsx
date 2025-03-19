import { AuthForm, userStore } from "@/features/Auth";
import s from "./s.module.scss";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

export const LoginPage = observer(() => {
  const navigate = useNavigate();
  const { user } = userStore;

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <div className={s.wrapper}>
      <div className={s.img}>
        <img src="/images/general/signUp.jpg" alt="login" />
      </div>
      <AuthForm type="login" />
    </div>
  );
});
