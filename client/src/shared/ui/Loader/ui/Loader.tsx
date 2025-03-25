import { Loader2 } from "lucide-react";
import s from "./s.module.scss"
export const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.loaderImg}>
        <Loader2 size={50} />
      </div>
    </div>
  );
}
