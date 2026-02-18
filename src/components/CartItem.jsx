import { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";

export default function CartItem({
    item,
    id,
    name,
    qty,
    price,
    onIncrease,
    onDecrease,
}) {
    // const { items, addItem, removeItem } = useContext(CartContext);

    return (
        <li className="cart-item">
            <p>{`${name} - ${qty} x ${currencyFormatter.format(price)}`}</p>
            <div className="cart-item-actions">
                <button type="button" onClick={(id) => onDecrease(id)}>
                    -
                </button>
                <span>{qty}</span>
                <button type="button" onClick={(item) => onIncrease(item)}>
                    +
                </button>
            </div>
        </li>
    );
}
