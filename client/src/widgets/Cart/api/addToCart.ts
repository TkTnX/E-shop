import { ProductItemType } from "@/app/types";
import { axiosInstance } from "@/shared/api/axiosInstance";

export const addToCart = async (product: ProductItemType) => {
  try {
    const res = await axiosInstance.post("/cart/add", { product });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
