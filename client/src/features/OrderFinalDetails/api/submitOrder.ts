import { axiosInstance } from "@/shared/api/axiosInstance";

export const submitOrder = async () => {
  try {
    const res = await axiosInstance.post("/cart/submit", {});
    if (!res) throw new Error("Something went wrong");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
