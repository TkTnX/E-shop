import { UserType } from "@/app/types";
import { axiosInstance } from "@/shared/api/axiosInstance";
import { makeAutoObservable } from "mobx";

class UserStore {
  user: UserType | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: UserType) => {
    this.user = user;
  };

  login = async () => {
    const user = await axiosInstance.get("/users/me", {
      withCredentials: true,
    });
    this.user = user.data;
    return user.data;
  };
}

export const userStore = new UserStore();
