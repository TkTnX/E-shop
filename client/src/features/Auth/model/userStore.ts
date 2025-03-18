import { UserType } from "@/app/types";
import { makeAutoObservable } from "mobx";

class UserStore {
  user: UserType | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: UserType) => {
    this.user = user;
  };
}

export const userStore = new UserStore();
