import { axiosInstance } from "./axiosInstance";

export const getProducts = async (filters?: Record<string, string>) => {
  try {
    const products = await axiosInstance.get("/products", { params: filters });
    if (!products) throw new Error("Products not found");

    return products.data;
  } catch (error) {
    console.log(error);
  }
};
