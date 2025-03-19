import { FormInput } from "@/shared/ui/FormInput";
import s from "./s.module.scss";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { axiosInstance } from "@/shared/api/axiosInstance";
import { AxiosError } from "axios";
import { observer } from "mobx-react-lite";
import { userStore } from "../model";

type Props = {
  type: "signUp" | "login";
};

export const AuthForm = observer(({ type }: Props) => {
  const isSignUp = type === "signUp" ? true : false;
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();
  const { setUser } = userStore;
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const { email, password, username } = Object.fromEntries(formData);
      if (!email || !password || (isSignUp && !username))
        return setError("All fields are required!");

      if (isSignUp) {
        const newUser = await axiosInstance.post(
          "/users/auth/sign-up",
          {
            email,
            password,
            username,
          },
          { withCredentials: true }
        );
        setUser(newUser.data);
        return navigate(`/profile`);
      } else {
        const user = await axiosInstance.post(
          "/users/auth/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );

        setUser(user.data);
      }
    } catch (error: unknown) {
      console.log(`ERROR!`, error);
      if (error instanceof AxiosError) {
        setError(error.response?.data.message || "Something went wrong!");
      }
    }
  };


  return (
    <div className={s.wrapper}>
      <h4 className={s.title}>
        {isSignUp ? "Create an account" : "Log in to E-store"}
      </h4>
      <p className={s.subtitle}>Enter your details below</p>
      <form onSubmit={onSubmit} className={s.form}>
        {isSignUp && <FormInput required name="username" placeholder="Name" />}
        <FormInput required name="email" type="email" placeholder="Email" />
        <FormInput required name="password" placeholder="Passowrd" />

        <button type="submit" className={s.button}>
          {isSignUp ? "Create Account" : "Log in"}
        </button>
      </form>
      {error && <span className={s.error}>{error}</span>}
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
});
