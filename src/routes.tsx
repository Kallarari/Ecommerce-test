import { createBrowserRouter } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Purchase } from "./pages/purchase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/purchase",
    element: <Purchase />,
  },
]);
