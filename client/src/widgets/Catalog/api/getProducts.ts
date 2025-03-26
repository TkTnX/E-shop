import { axiosInstance } from "@/shared/api/axiosInstance";

export const getProducts = async (query: URLSearchParams) => {
  try {

    const products = await axiosInstance.get(`/products?${query.toString()}`);
    if (!products) throw new Error("Products not found");

    return products.data;
  } catch (error) {
    console.log(error);
  }
};
