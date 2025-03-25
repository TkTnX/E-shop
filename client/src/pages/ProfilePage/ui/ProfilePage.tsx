import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { userStore } from "@/features/Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ProfileSidebar } from "@/features/ProfileSidebar";
import { ProfileMain } from "@/widgets/ProfileMain";


export const ProfilePage = () => {
  const { user } = userStore;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className={`container ${s.wrapper}`}>
      <div className={s.top}>
        <Breadcrumbs
          steps={[{ name: "Home", href: "/" }, { name: "Profile" }]}
        />
        <p className={s.welcome}>
          Welcome!{" "}
          <span>
            {user?.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : user?.username}
          </span>
        </p>
      </div>
      <div className={s.main}>
        <ProfileSidebar />
        <ProfileMain />
      </div>
    </div>
  );
};
