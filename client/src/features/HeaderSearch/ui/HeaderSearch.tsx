import { Search } from "lucide-react";
import s from "./s.module.scss";
import { useNavigate, useSearchParams } from "react-router";
import { catalogStore } from "@/widgets/Catalog";
export const HeaderSearch = () => {
  const [, setSearchParams] = useSearchParams();
  const { params, setParams } = catalogStore;
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setParams("q", formData.get("q") as string);
    setSearchParams(params);
    navigate(`/catalog?${params.toString()}`);
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
