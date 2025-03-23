import { Heart, LogOut, ShoppingBag, ShoppingCart, User } from "lucide-react";

export const DROPDOWN_ITEMS = [
  { title: "Manage My Account", img: <User />, href: "/profile" },
  { title: "My Order", img: <ShoppingBag />, href: "/checkout" },
  { title: "My Favorites", img: <Heart />, href: "/favorites" },
  { title: "My Cart", img: <ShoppingCart />, href: "/cart" },
  { title: "Logout", img: <LogOut />, href: "/" },
];
