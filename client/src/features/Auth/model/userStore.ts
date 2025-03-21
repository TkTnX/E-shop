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
    const user = await axiosInstance.get("/users/auth/me");
    this.user = user.data;
    return user.data;
  };

  logout = async () => {
    await axiosInstance.post("/users/auth/logout", {});
    this.user = null;
  };
}

export const userStore = new UserStore();
