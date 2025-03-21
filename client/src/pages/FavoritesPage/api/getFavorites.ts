import { axiosInstance } from "@/shared/api/axiosInstance";

export const getFavorites = async () => {
  try {
    const favorites = await axiosInstance.get("/favorites");
    if (!favorites) return [];
    return favorites.data;
  } catch (error) {
    console.log(error);
  }
};
