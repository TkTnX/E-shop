import s from "./s.module.scss";
import { Link } from "react-router";

type Props = {
  steps: { href?: string; name: string }[];
};

export const Breadcrumbs = ({ steps }: Props) => {
  return (
    <div className={s.breadcrumbs}>
      {steps.map((step, index) => (
        <>
          {index > 0 && <span className={s.devider}>/</span>}
          <Link className={s.item} to={step.href || ""} key={index}>
            {step.name}
          </Link>
        </>
      ))}
    </div>
  );
};
