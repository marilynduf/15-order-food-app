import { mealData } from "../backend/data/available-meals";

import AvailableMealCard from "./components/availableMealCard";

console.log(mealData);

function App() {
    return (
        <main id="meal">
            {mealData.map((meal) => {
                return (
                    <AvailableMealCard
                        img={meal.image}
                        title={meal.name}
                        price={meal.price}
                        description={meal.description}
                    />
                );
            })}
        </main>
    );
}

export default App;
