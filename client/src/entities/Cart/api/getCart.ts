import { axiosInstance } from "@/shared/api/axiosInstance";

export const getCart = async () => {
  try {
    const cart = await axiosInstance.get("/cart");
    if (!cart) return new Error("Cart not found");

    return cart.data;
  } catch (error) {
    console.log(error);
  }
};
