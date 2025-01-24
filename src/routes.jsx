// import App from "./App";
import { HomePage } from "./homepage.";
import { Cart } from "./cart";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export { routes };
