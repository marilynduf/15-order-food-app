import { useState, useEffect } from "react";
import CheckoutModal from "./components/CheckoutModal";
import Header from "./components/Header";
import AvailableMealCard from "./components/Meal";

function App() {
    const [availableMeals, setAvailableMeals] = useState();
    useEffect(() => {
        async function getMeals() {
            const response = await fetch("http://localhost:3000/meals");
            const data = await response.json();
            setAvailableMeals(data);
        }
        getMeals();
    }, []);

    return (
        <>
            <Header></Header>
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
