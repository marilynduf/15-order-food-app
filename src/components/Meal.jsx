export default function AvailableMealCard({ img, name, price, description }) {
    return (
        <div className="meal-item">
            <img src={img} alt="meal" />
            <article>
                <h3>{name}</h3>
                <div className="meal-item-price">{price}</div>
                <p className="meal-item-description">{description}</p>
                <button className="button">Add to cart</button>
            </article>
        </div>
    );
}
