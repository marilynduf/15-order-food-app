import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function CartItem({ ref, onGoToCheckout }) {
    const { items, addItem, removeItem } = useContext(CartContext);

    const handleAddItem = function (item) {
        addItem(item);
    };

    const handleRemoveItem = function (id) {
        removeItem(id);
    };

    const totalPrice = items.reduce(
        (acc, item) => (acc += item.qty * item.price),
        0,
    );

    return (
        <Modal ref={ref}>
            <form method="dialog" className="cart">
                <h2>Your cart</h2>
                {items.length === 0 && <p>No meal added to cart</p>}
                {items.length > 0 && (
                    <ul>
                        {items.map((item) => {
                            return (
                                <div key={item.id} className="cart-item">
                                    <p>{`${item.name} - ${item.qty} x ${currencyFormatter.format(item.price)}`}</p>
                                    <div className="cart-item-actions">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveItem(item.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <p>{item.qty}</p>
                                        <button
                                            type="button"
                                            onClick={() => handleAddItem(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                )}
                <p className="cart-total">
                    {currencyFormatter.format(totalPrice)}
                </p>
                <div className="modal-actions">
                    <Button textOnly>Close</Button>
                    <Button type="button" onClick={onGoToCheckout}>
                        Go to checkout
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
