import { UserType } from "@/app/types";
import { axiosInstance } from "@/shared/api/axiosInstance";

export const updateUser = async (
  e: React.FormEvent<HTMLFormElement>,
  user: UserType
) => {
  try {
    const formData = new FormData(e.target as HTMLFormElement);
    if (!formData) throw new Error("No data");

    const body = Object.fromEntries(formData);
    if (!body) throw new Error("No body");
    const updatedUser = await axiosInstance.patch("/users/update", {
      firstName: body.firstName || user?.firstName || null,
      lastName: body.lastName || user?.lastName || null,
      email: body.email || user?.email || null,
      phoneNumber: body.phoneNumber || user?.phoneNumber || null,
      password: body.password || null,
      address: body.address || user?.address || null,
    });

    return updatedUser.data;
  } catch (error) {
    console.log(error);
  }
};
