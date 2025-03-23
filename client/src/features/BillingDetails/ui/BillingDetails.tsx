import { FormInput } from "@/shared/ui/FormInput";
import s from "./s.module.scss";
export const BillingDetails = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Billing Details</h2>
      <form className={s.form}>
        <FormInput name="firstname" label="First Name" required />
        <FormInput name="company" label="Company Name" />
        <FormInput name="street" label="Street Address" required />
        <FormInput
          name="addressMore"
          label="Apartment, floor, etc. (optional)"
        />
        <FormInput name="town" label="Town/City" required />
        <FormInput name="phone" label="Phone Number" type="tel" required />
        <FormInput name="email" label="Email Address" type="email" required />
        <label className={s.checkbox}>
          <input type="checkbox" />
          Save this information for faster check-out next time
        </label>
      </form>
    </div>
  );
};
