import { profileStore } from "@/pages/ProfilePage";
import s from "./s.module.scss";
import { ProfileEditForm } from "@/features/ProfileEditForm";
import { ProfileAddressForm } from "@/features/ProfileAddressForm";
import { observer } from "mobx-react-lite";
import { userStore } from "@/features/Auth";
import { updateUser } from "../api";
import { toast } from "react-toastify";
export const ProfileMain = observer(() => {
  const { sidebarValue } = profileStore;
  const { user } = userStore;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const updatedUser = await updateUser(e, user!);

      if (!updatedUser) throw new Error("User not updated");
      toast.success("Profile updated! Update the page to see the result!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className={s.wrapper}>
      {sidebarValue === "editProfile" ? (
        <ProfileEditForm
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
        />
      ) : (
        <ProfileAddressForm
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
        />
      )}
    </div>
  );
});
