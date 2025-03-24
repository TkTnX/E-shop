import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { Contacts } from "@/entities/Contacts";
import { ContactsForm } from "@/features/ContactsForm";

export const ContactPage = () => {
  return (
    <div className={`container ${s.wrapper}`}>
      <Breadcrumbs steps={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <div className={s.main}>
        <Contacts />
        <ContactsForm />
      </div>
    </div>
  );
};
