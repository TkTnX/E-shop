import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { Link } from "react-router";
export const NotFound = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <Breadcrumbs
        steps={[{ name: "Home", href: "/" }, { name: "404 Error" }]}
          />
          <div className={s.main}>
              <h1>404 Not Found</h1>
              <p>Your visited page not found. You may go home page.</p>
              <Link to={"/"}>Back to home page</Link>
          </div>
    </div>
  );
};
