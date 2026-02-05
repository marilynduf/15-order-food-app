import { useState, useRef, useEffect } from "react";
import CheckoutModal from "./components/CheckoutModal";
import Header from "./components/Header";
import AvailableMealCard from "./components/Meal";

function App() {
    const [availableMeals, setAvailableMeals] = useState();
    const dialog = useRef();
    useEffect(() => {
        async function getMeals() {
            const response = await fetch("http://localhost:3000/meals");
            const data = await response.json();
            setAvailableMeals(data);
        }
        getMeals();
    }, []);

    const handleOnClick = function () {
        dialog.current.showModal();
    };

    return (
        <>
            <Header handleOnClick={handleOnClick}></Header>
            <CheckoutModal ref={dialog}></CheckoutModal>
            <main id="meals">
                {availableMeals?.map((meal) => {
                    console.log(meal.image);
                    return (
                        <AvailableMealCard
                            img={"http://localhost:3000/" + meal.image}
                            name={meal.name}
                            price={meal.price}
                            description={meal.description}
                        />
                    );
                })}
            </main>
        </>
    );
}

export default App;
