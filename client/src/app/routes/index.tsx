import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/shared/ui/RootLayout";
import { Homepage } from "@/pages/Homepage";
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
    ],
  },
]);
