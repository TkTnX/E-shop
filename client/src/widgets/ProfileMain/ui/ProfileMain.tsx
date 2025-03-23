import { profileStore } from "@/pages/ProfilePage";
import s from "./s.module.scss";
import { ProfileEditForm } from "@/features/ProfileEditForm";
import { ProfileAddressForm } from "@/features/ProfileAddressForm";
import { observer } from "mobx-react-lite";
export const ProfileMain = observer(() => {
  const { sidebarValue } = profileStore;
  return (
    <div className={s.wrapper}>
      {sidebarValue === "editProfile" ? (
        <ProfileEditForm />
      ) : (
        <ProfileAddressForm />
      )}
    </div>
  );
});
