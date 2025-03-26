import { makeAutoObservable } from "mobx";

class CatalogStore {
  constructor() {
    makeAutoObservable(this);
  }
  priceTo: null | number = null;
  params = "";

  setParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(this.params);
    newParams.set(key, value);
    this.params = newParams.toString();
  };

  clearFilters = () => {
    this.params = "";
    this.priceTo = null;
  };

  setPriceTo = (value: number | null) => {
    this.priceTo = value;
  };
}

export const catalogStore = new CatalogStore();
