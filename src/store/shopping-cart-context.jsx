import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addSameItemAgain: () => {},
    removeOneItem: () => {},
    deleteItemFromCart: () => {},
});
