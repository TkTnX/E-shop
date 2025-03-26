import { CartType, ProductItemType } from "@/app/types";
import { makeAutoObservable } from "mobx";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  cart: CartType | null = null;
  totalPrice = 0;

  setCart = (cart: CartType) => {
    this.cart = cart;
    this.totalPrice = cart.totalPrice;
  };

  removeProductFromCart = (productId: number) => {
    if (this.cart) {
      this.cart.products = this.cart.products.filter(
        (p) => p.product._id !== productId
      );
    }
  };

  addToCart = (product: ProductItemType) => {
    if (this.cart) {
      this.cart.products.push({ product, quantity: 1 });

      this.totalPrice += product.discount
        ? product.price - product.price * product.discount
        : product.price;
    }
  };
  setTotalPrice = (value: number) => {
    this.totalPrice = value;
  };

  
}

export const cartStore = new CartStore();
