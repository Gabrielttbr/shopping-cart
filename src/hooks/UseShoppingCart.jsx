import { useContext } from "react";
import { ContextShoppingCart } from "../App";

export default function useShoppingCart() {
    const context = useContext(ContextShoppingCart) 

    if (!context) {
        throw new Error('Not found ContextShoppingCart')
    }

    return context
}