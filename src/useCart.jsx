import { useContext } from "react";
import { CartContext } from "./cartcontext";

export const useCart = () => {
    return useContext(CartContext);
};