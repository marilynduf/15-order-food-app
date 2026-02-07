import { useRef, useState } from "react";
import { CartContext } from "./store/shopping-cart-context";
import CheckoutForm from "./components/CheckoutForm";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
    const dialogCheckout = useRef();
    const dialogCartItem = useRef();

    const [itemsAddedToCart, setItemsAddedToCart] = useState([]);

    const HandleAddSameItemAgain = function (id) {
        setItemsAddedToCart((prevState) => {
            return prevState.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : { ...item },
            );
        });
    };

    const handleDeleteSameItemAgain = function (id) {
        setItemsAddedToCart((prevState) => {
            const item = prevState.find((item) => item.id === id);

            if (!item) return prevState;

            if (item.qty === 1) {
                const confirmed = window.confirm(
                    "Veux-tu vraiment supprimer cet item du panier ?",
                );
                if (!confirmed) return prevState;
                return prevState.filter((item) => item.id !== id);
            }

            return prevState.map((item) =>
                item.id === id ? { ...item, qty: item.qty - 1 } : item,
            );
        });
    };

    const handleAddItemToCart = function ({ id, name, price }) {
        const isMealAlreadyInCart = itemsAddedToCart.some(
            (item) => item.id === id,
        );
        setItemsAddedToCart((prevState) => {
            return isMealAlreadyInCart
                ? prevState.map((item) =>
                      item.name === name
                          ? { ...item, qty: item.qty + 1 }
                          : { ...item },
                  )
                : [...prevState, { id: id, name: name, qty: 1, price: price }];
        });
    };

    const handleOnClick = function () {
        dialogCartItem.current.showModal();
    };
    const handleGoToCheckout = function () {
        dialogCartItem.current.close();
        dialogCheckout.current.showModal();
    };

    const ctxValue = {
        items: itemsAddedToCart,
        addSameItemAgain: HandleAddSameItemAgain,
        removeOneItem: handleDeleteSameItemAgain,
    };

    return (
        <CartContext.Provider value={ctxValue}>
            <Header handleOnClick={handleOnClick}></Header>
            <CartItem
                ref={dialogCartItem}
                onGoToCheckout={handleGoToCheckout}
            ></CartItem>
            <CheckoutForm ref={dialogCheckout}></CheckoutForm>
            <Meals
                meals={itemsAddedToCart}
                onAddItemToCart={handleAddItemToCart}
            ></Meals>
        </CartContext.Provider>
    );
}

export default App;
