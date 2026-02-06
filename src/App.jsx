import { useRef, useState } from "react";
import CheckoutForm from "./components/CheckoutForm";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
    const dialogCheckout = useRef();
    const dialogCartItem = useRef();

    const [itemsAddedToCart, setItemsAddedToCart] = useState([]);

    const handleAddToCart = function (mealName) {
        const isMealAlreadyInCart = itemsAddedToCart.some(
            (item) => item.name === mealName,
        );
        setItemsAddedToCart((prevState) => {
            return isMealAlreadyInCart
                ? prevState.map((item) =>
                      item.name === mealName
                          ? { ...item, qty: item.qty + 1 }
                          : { ...item },
                  )
                : [...prevState, { name: mealName, qty: 1 }];
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
