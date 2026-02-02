export default function AvailableMealCard({ img, title, price, description }) {
    return (
        <div className="meal-item">
            <img src={img} alt="meal" />
            <article>
                <h3>{title}</h3>
                <div className="meal-item-price">{price}</div>
                <p className="meal-item-description">{description}</p>
            </article>
            <button className="button">Add to cart</button>
        </div>
    );
}
