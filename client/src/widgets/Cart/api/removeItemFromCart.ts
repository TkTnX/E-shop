import { axiosInstance } from "@/shared/api/axiosInstance";

export const removeItemFromCart = async (id: number) => {
  try {
    const res = await axiosInstance.delete(`/cart/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
