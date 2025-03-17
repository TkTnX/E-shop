import { axiosInstance } from "@/shared/api/axiosInstance";

export const getProducts = async () => {
  try {
    const products = await axiosInstance.get("/products");
    if (!products) throw new Error("Products not found");

    return products.data;
  } catch (error) {
    console.log(error);
  }
};
