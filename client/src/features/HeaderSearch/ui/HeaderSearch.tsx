import { Search } from "lucide-react";
import s from "./s.module.scss";
import { useNavigate, useSearchParams } from "react-router";
export const HeaderSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("q", formData.get("q") as string);
    setSearchParams(newParams);
    navigate(`/catalog?${newParams.toString()}`);
  };

  return (
    <form onSubmit={onSubmit} className={s.form}>
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
