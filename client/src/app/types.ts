export type ProductItemType = {
  _id: number;
  img: string;
  title: string;
  rating: number;
  price: number;
  description?: string;
  discount?: number;
};

export type UserType = {
  _id: number;
  img: string | null;
  username: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  cartId: number | null;
};

export type FavoriteItemType = {
  _id: number;
  user: UserType;
  product: ProductItemType;
};

export type CartType = {
  _id: number;
  userId: number;
  totalPrice: number;
  products: {
    product: ProductItemType;
    quantity: number;
  };
  createdAt: string;
  updatedAt: string;
};

export interface CartItemType {
  product: ProductItemType;
  quantity: number;
}
