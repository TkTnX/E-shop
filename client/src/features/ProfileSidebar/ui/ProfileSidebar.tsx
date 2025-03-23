import { PROFILE_SIDEBAR_ITEMS } from "./config";
import s from "./s.module.scss";
import { Link } from "react-router";
import { observer } from "mobx-react-lite";
import { profileStore } from "@/pages/ProfilePage";

export const ProfileSidebar = observer(() => {
  const { sidebarValue, setSidebarValue } = profileStore;
  return (
    <div className={s.wrapper}>
      {PROFILE_SIDEBAR_ITEMS.map((item, index) => (
        <div key={index}>
          <h4 className={s.title}>{item.title}</h4>
          <ul className={s.list}>
            {item.items.map((el, index) => {
              if (el.href) {
                return (
                  <li key={index}>
                    <Link
                      to={el.href}
                      className={`${s.item} ${
                        sidebarValue === el.value && s.active
                      }`}
                      onClick={() => setSidebarValue(el.value || "")}
                    >
                      {el.title}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <button
                      className={`${s.item} ${
                        sidebarValue === el.value && s.active
                      }`}
                      onClick={() => setSidebarValue(el.value || "")}
                    >
                      {el.title}
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      ))}
    </div>
  );
});
