import { axiosInstance } from "@/shared/api/axiosInstance";

export const getRelatedProducts = async (cat: string) => {
  try {
    const products = await axiosInstance.get(`/products?cat=${cat}`);
    if (!products) throw new Error("Products not found");

    return products.data;
  } catch (error) {
    console.log(error);
  }
};
