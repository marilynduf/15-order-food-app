import { useRef, useState } from "react";
import CheckoutForm from "./components/CheckoutForm";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
    const dialogCheckout = useRef();
    const dialogCartItem = useRef();

    const [itemsAddedToCart, setItemsAddedToCart] = useState([]);

    const handleAddSameItemAgain = function (id) {
        setItemsAddedToCart((prevState) => {
            return prevState.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : { ...item },
            );
        });
    };

    const handleDeleteSameItemAgain = function (id) {
        setItemsAddedToCart((prevState) => {
            return prevState.map((item) =>
                item.id === id ? { ...item, qty: item.qty - 1 } : { ...item },
            );
        });
    };

    const handleAddToCart = function ({ id, name, price }) {
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

    console.log(itemsAddedToCart);
    const handleOnClick = function () {
        dialogCartItem.current.showModal();
    };
    const handleGoToCheckout = function () {
        dialogCartItem.current.close();
        dialogCheckout.current.showModal();
    };

    return (
        <>
            <Header handleOnClick={handleOnClick}></Header>
            <CartItem
                ref={dialogCartItem}
                onGoToCheckout={handleGoToCheckout}
                meals={itemsAddedToCart}
                onAddSameItemAgain={handleAddSameItemAgain}
                onDeleteSameItemAgain={handleDeleteSameItemAgain}
            ></CartItem>
            <CheckoutForm ref={dialogCheckout}></CheckoutForm>
            <Meals
                meals={itemsAddedToCart}
                onAddToCart={handleAddToCart}
            ></Meals>
        </>
    );
}

export default App;
