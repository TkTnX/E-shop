import { userStore } from "@/features/Auth";
import s from "./s.module.scss";
import { FormInput } from "@/shared/ui/FormInput";
import { Button } from "@/shared/ui/Button";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const ProfileAddressForm = ({ onSubmit }: Props) => {
  const { user } = userStore;
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Your Addresses</h2>
      <p className={s.currentAddress}>
        Current address: <span>{user?.address || "NONE"}</span>
      </p>
      <form onSubmit={onSubmit} className={s.form}>
        <FormInput className={s.input} name="address" label="Address" />
        <Button type="submit" style={{ marginTop: "32px" }}>
          Save address
        </Button>
      </form>
    </div>
  );
};
