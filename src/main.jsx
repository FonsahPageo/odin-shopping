// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";
import { CartProvider } from "./CartProvider";
CartProvider

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
