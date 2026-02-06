import { useRef } from "react";
import CheckoutForm from "./components/CheckoutForm";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
    const dialogCheckout = useRef();
    const dialogCartItem = useRef();

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
            ></CartItem>
            <CheckoutForm ref={dialogCheckout}></CheckoutForm>
            <Meals></Meals>
        </>
    );
}

export default App;
