import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import CheckoutForm from "./components/CheckoutForm";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header></Header>
                <CartItem></CartItem>
                <CheckoutForm></CheckoutForm>
                <Meals></Meals>
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
