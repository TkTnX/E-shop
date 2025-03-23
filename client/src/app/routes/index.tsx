import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/shared/ui/RootLayout";
import { Homepage } from "@/pages/Homepage";
import { SignUpPage } from "@/pages/SignUpPage";
import { LoginPage } from "@/pages/LoginPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      }
    ],
  },
]);
