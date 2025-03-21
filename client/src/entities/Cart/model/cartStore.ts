import { CartType } from "@/app/types";
import { makeAutoObservable } from "mobx";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  
  cart: CartType | null = null;
  totalPrice = 0;

  setCart = (cart: CartType) => {
    this.cart = cart;
  };
}

export const cartStore = new CartStore();
