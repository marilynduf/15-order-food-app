import { useState, useRef, useEffect } from "react";
import CheckoutModal from "./components/CheckoutModal";
import Header from "./components/Header";
import AvailableMealCard from "./components/Meal";

function App() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    const dialog = useRef();
    useEffect(() => {
        async function getMeals() {
            const response = await fetch("http://localhost:3000/meals");

            if (!response.ok) {
                throw new Error("Error");
            }

            const meals = await response.json();
            setLoadedMeals(meals);
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
            <ul id="meals">
                {loadedMeals?.map((meal) => {
                    console.log(meal.image);
                    return (
                        <AvailableMealCard
                            key={meal.id}
                            img={"http://localhost:3000/" + meal.image}
                            name={meal.name}
                            price={meal.price}
                            description={meal.description}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default App;
