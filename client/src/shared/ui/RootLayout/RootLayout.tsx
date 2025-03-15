import { Outlet } from "react-router";
import s from "./RootLayout.module.scss";
import { Header } from "@/widgets/Header";
export const RootLayout = () => {
  return (
    <div className={s.root}>
      <Header />
      <Outlet />
    </div>
  );
};
