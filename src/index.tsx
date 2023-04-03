import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Header } from "./components/header";
import { CartContextProvider } from "./context/cartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Header />
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
