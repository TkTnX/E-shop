import { RouterProvider } from "react-router";
import { router } from "./routes";
import "./styles/reset.css"
import "./styles/base.css"
export const App = () => {
  return <RouterProvider router={router} />;
};
