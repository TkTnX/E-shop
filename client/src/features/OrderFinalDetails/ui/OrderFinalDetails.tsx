import { Button } from "@/shared/ui/Button";
import s from "./s.module.scss";
import { useState } from "react";
import { submitOrder } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const OrderFinalDetails = () => {
  const [selected, setSelected] = useState<"bank" | "cash">("bank");
  const navigate = useNavigate();
  const handleSubmitOrder = async () => {
    try {
      const res = await submitOrder();

      if (!res) throw new Error("Something went wrong");
      navigate("/");

      return toast.success("Order submitted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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
      <Button onClick={handleSubmitOrder} style={{ marginTop: "32px" }}>
        Place Order
      </Button>
    </div>
  );
};
