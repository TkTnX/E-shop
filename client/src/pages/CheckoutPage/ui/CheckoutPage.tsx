import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import s from "./s.module.scss";
import { CHECKOUT_PAGE_BREADCRUMBS } from "./config";
import { BillingDetails } from "@/features/BillingDetails";
import { OrderTotal } from "@/entities/OrderTotal";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { userStore } from "@/features/Auth";
import { cartStore } from "@/widgets/Cart";
export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { user } = userStore;
  const { cart } = cartStore;

  useEffect(() => {
    if (!user || !cart) {
      navigate("/");
    }
  }, [cart, navigate, user]);

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
