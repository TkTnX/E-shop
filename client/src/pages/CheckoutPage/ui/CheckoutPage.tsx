import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { CHECKOUT_PAGE_BREADCRUMBS } from "./config";
import { BillingDetails } from "@/features/BillingDetails";
import { OrderTotal } from "@/entities/OrderTotal";
export const CheckoutPage = () => {
  // TODO: Запрет на cart, checkout если не авторизован
  // TODO: Badge у иконок favorites, cart
  return (
    <div className={`container ${s.wrapper}`}>
      <Breadcrumbs steps={CHECKOUT_PAGE_BREADCRUMBS} />
      <div className={s.checkout}>
        <BillingDetails />
        <OrderTotal />
      </div>
    </div>
  );
};
