import { FormInput } from "@/shared/ui/FormInput";
import s from "./s.module.scss";
import { userStore } from "@/features/Auth";
import { Button } from "@/shared/ui/Button";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const ProfileEditForm = ({ onSubmit }: Props) => {
  const { user } = userStore;

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Edit Your Profile</h2>
      <form onSubmit={onSubmit} className={s.form}>
        <div className={s.formTop}>
          <FormInput
            label="First Name"
            name="firstName"
            placeholder={user?.firstName || ""}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            placeholder={user?.lastName || ""}
          />
          <FormInput
            label="Email"
            name="email"
            placeholder={user?.email || ""}
          />
          <FormInput
            label="Phone Number"
            name="phoneNumber"
            placeholder={user?.phoneNumber || ""}
          />
        </div>
        <div className={s.formBottom}>
          <FormInput
            label="Passowrd Changes"
            name="password"
            placeholder="New Password"
          />
        </div>
        <div className={s.buttons}>
          <button className={s.cancel} type="button">
            Cancel
          </button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};
