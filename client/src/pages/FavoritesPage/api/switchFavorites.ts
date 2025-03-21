import { axiosInstance } from "@/shared/api/axiosInstance";

export const switchFavorites = async (productId: number) => {
  try {
    if (!productId) return new Error("Product not found");

      const res = await axiosInstance.post(`/favorites/${productId}`, { productId });
    
      return res.data;
  } catch (error) {
    console.log(error);
  }
};
