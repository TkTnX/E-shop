import { Outlet } from "react-router";
import s from "./RootLayout.module.scss";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
export const RootLayout = () => {
  return (
    <div className={s.root}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
