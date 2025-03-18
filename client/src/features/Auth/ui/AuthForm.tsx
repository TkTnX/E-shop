import { FormInput } from "@/shared/ui/FormInput";
import s from "./s.module.scss";
import { Link } from "react-router";

type Props = {
  type: "signUp" | "login";
};

export const AuthForm = ({ type }: Props) => {
  const isSignUp = type === "signUp" ? true : false;
  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>
        {isSignUp ? "Create an account" : "Log in to E-store"}
      </h4>
      <p className={s.subtitle}>Enter your details below</p>
      <form className={s.form}>
        {isSignUp && <FormInput name="username" placeholder="Name" />}
        <FormInput name="email" placeholder="Email" />
        <FormInput name="password" placeholder="Passowrd" />

        <button className={s.button}>
          {isSignUp ? "Create Account" : "Log in"}
        </button>
      </form>
      <p className={s.link}>
        {isSignUp ? (
          <>
            Already have an account? <Link to="/login">Log in</Link>
          </>
        ) : (
          <>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </>
        )}
      </p>
    </div>
  );
};
