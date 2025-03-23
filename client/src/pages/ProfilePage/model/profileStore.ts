import { makeAutoObservable } from "mobx";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
  sidebarValue = "editProfile";

  setSidebarValue = (value: string) => {
    this.sidebarValue = value;
  };
}

export const profileStore = new ProfileStore();
