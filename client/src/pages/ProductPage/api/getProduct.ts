import { axiosInstance } from "@/shared/api/axiosInstance";

export const getProducts = async (id: string) => {
  try {
    if (!id) throw new Error("Id is required");

    const product = await axiosInstance.get(`/products/${id}`);
    if (!product) throw new Error("Product not found");

    return product.data;
  } catch (error) {
    console.log(error);
  }
};
