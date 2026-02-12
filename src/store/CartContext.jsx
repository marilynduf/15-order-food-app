import { createContext, useReducer, useState } from "react";

// Object de contexte : Il permet le partage des données (Mais ne contient pas les données)
const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    // removeOneItem: (id) => {},
    // deleteItemFromCart: (id) => {},
});

// la fonction du reducer reçoit un état et une action, puis retourne un nouvel état
function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        const isInCart = state.items.findIndex(
            (item) => item.id === action.item.id,
        );

        const updatedItems = [...state.items];

        if (isInCart > -1) {
            const existingItem = state.items[isInCart];
            const updatedItem = { ...existingItem, qty: existingItem.qty + 1 };
            updatedItems[isInCart] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, qty: 1 });
        }
        return { ...state, items: updatedItems };
    }
}

// Composant qui enveloppe les composants enfants ({children}) qui transmet les vraies données du state
export function CartContextProvider({ children }) {
    // Hook useReducer, prend en param la fonction qui traite les actions et l'état du composant
    // Comme useState() mais la fonction setData est remplacée
    // par un dispatch qui gère plurieurs "setData"
    const [cart, dispatch] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatch({ type: "ADD_ITEM", item });
    }
    const CartContextValue = {
        items: cart.items,
        addItem,
    };

    return (
        <CartContext.Provider value={CartContextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
