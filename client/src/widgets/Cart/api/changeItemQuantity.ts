import { axiosInstance } from "@/shared/api/axiosInstance";

export const changeItemQuantity = async (
  productId: number,
  quantity: number,
  cartId: number
) => {
  try {
    if (!productId || !quantity || !cartId)
      return new Error("All fields are required");

    const res = await axiosInstance.post(`/cart/quantity`, {
      productId,
      quantity,
      cartId,
    });

    if (!res) return new Error("Something went wrong");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
