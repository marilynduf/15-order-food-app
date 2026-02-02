// import { mealData } from "../backend/data/available-meals";
import { useState, useEffect } from "react";
import logo from "./assets/logo.jpg";
import CheckoutModal from "./components/CheckoutModal";
import Header from "./components/Header";
import AvailableMealCard from "./components/availableMealCard";

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

    console.log("availableMeals", availableMeals);
    return (
        <>
            <Header logo={logo}></Header>
            <main id="meals">
                {/* {mealData.map((meal) => {
                    return (
                        <AvailableMealCard
                            img="image"
                            name="nom"
                            price="prix"
                            description="description"
                            // img={meal.image}
                            // name={meal.name}
                            // price={meal.price}
                            // description={meal.description}
                        />
                    );
                })} */}
            </main>
        </>
    );
}

export default App;
