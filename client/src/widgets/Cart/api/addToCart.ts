import { axiosInstance } from "@/shared/api/axiosInstance";

export const addToCart = async (productId: number) => {
  try {
    const res = await axiosInstance.post("/cart/add", { productId });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
