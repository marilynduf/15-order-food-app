import { useState, useEffect } from "react";
import MealItem from "../components/MealItem";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

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

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}
