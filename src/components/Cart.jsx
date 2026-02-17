import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function Cart() {
    const { items, addItem, removeItem } = useContext(CartContext);
    const { progress, hideCart, showCheckout } =
        useContext(UserProgressContext);

    const handleCloseCart = function () {
        hideCart();
    };
    const handleShowCheckout = function () {
        hideCart();
        showCheckout();
    };

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
        <Modal className="cart" open={progress === "cart"}>
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
            <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
            <div className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>
                    Close
                </Button>
                <Button type="button" onClick={handleShowCheckout}>
                    Go to checkout
                </Button>
            </div>
        </Modal>
    );
}
