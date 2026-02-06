import Button from "./UI/Button";
export default function MealItem({ meal, onAddToCart }) {
    const mealName = meal.name;

    return (
        <li className="meal-item">
            <article>
                <img
                    src={`http://localhost:3000/${meal.image}`}
                    alt={meal.name}
                />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{meal.price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={() => onAddToCart(meal)}>
                        Add to cart
                    </Button>
                </p>
            </article>
        </li>
    );
}
