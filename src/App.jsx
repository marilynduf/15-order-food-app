import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import CheckoutForm from "./components/CheckoutForm";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header></Header>
                <Cart></Cart>
                <CheckoutForm></CheckoutForm>
                <Meals></Meals>
            </CartContextProvider>
        </UserProgressContextProvider>
    );
}

export default App;
