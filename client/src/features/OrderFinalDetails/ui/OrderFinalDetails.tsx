import { Button } from "@/shared/ui/Button";
import s from "./s.module.scss";
import { useState } from "react";

export const OrderFinalDetails = () => {
  const [selected, setSelected] = useState<"bank" | "cash">("bank");
  return (
    <div className={s.wrapper}>
      <div className={s.payment}>
        <button className={s.button} onClick={() => setSelected("bank")}>
          <div className={`${s.checkbox} ${selected === "bank" && s.active}`} />
          <span>Bank</span>
          <img src="/images/general/payments.svg" alt="Payments" />
        </button>
        <button className={s.button} onClick={() => setSelected("cash")}>
          <div className={`${s.checkbox} ${selected === "cash" && s.active}`} />
          <span>Cash on delivery</span>
        </button>
      </div>
      <Button style={{ marginTop: "32px" }}>Place Order</Button>
    </div>
  );
};
