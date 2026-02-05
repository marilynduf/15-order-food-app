export default function AvailableMealCard({ img, name, price, description }) {
    return (
        <li className="meal-item">
            <article>
                <img src={img} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-actions">
                    <button className="button">Add to cart</button>
                </p>
            </article>
        </li>
    );
}
