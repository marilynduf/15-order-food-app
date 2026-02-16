import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
    const { items } = useContext(CartContext);
    const { showCart, progress } = useContext(UserProgressContext);

    const totalMealsIncart = items.reduce((total, item) => {
        return total + item.qty;
    }, 0);

    const handleOnClick = function () {
        showCart();
    };

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="app logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleOnClick}>
                    Cart ({totalMealsIncart})
                </Button>
            </nav>
        </header>
    );
}
