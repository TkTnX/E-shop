import { FormInput } from "@/shared/ui/FormInput"
import s from "./s.module.scss"
import { Button } from "@/shared/ui/Button";
export const ContactsForm = () => {
  return (
    <form className={s.form}>
      <div className={s.top}>
        <FormInput name="name" placeholder="Your Name" required />
        <FormInput name="email" placeholder="Your Email" required />
        <FormInput name="phone" placeholder="Your Phone" required />
      </div>
      <textarea name="message" placeholder="Your Message" />
      <Button>Send Message</Button>
    </form>
  );
}
