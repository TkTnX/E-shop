import { Search } from "lucide-react";
import s from "./s.module.scss";
export const HeaderSearch = () => {
  return (
    <form className={s.form}>
      <input
        className={s.input}
        placeholder="What are you looking for?"
        type="text"
        name="q"
      />
      <button>
        <Search />
      </button>
    </form>
  );
};
