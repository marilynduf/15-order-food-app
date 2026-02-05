import { useRef } from "react";
import CheckoutModal from "./components/CheckoutModal";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
    const dialog = useRef();

    const handleOnClick = function () {
        dialog.current.showModal();
    };

    return (
        <>
            <Header handleOnClick={handleOnClick}></Header>
            <CheckoutModal ref={dialog}></CheckoutModal>
            <Meals></Meals>
        </>
    );
}

export default App;
