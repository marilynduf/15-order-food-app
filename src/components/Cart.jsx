import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import CartItem from "./CartItem";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function Cart() {
    const { items, addItem, removeItem } = useContext(CartContext);
    const { progress, hideCart, showCheckout } =
        useContext(UserProgressContext);

    const isDisabled = items.length <= 0;

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
        <Modal
            className="cart"
            open={progress === "cart"}
            handleCloseCart={handleCloseCart}
        >
            <h2>Your cart</h2>
            {items.length === 0 && <p>No meal added to cart</p>}
            {items.length > 0 && (
                <ul>
                    {items.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                onIncrease={() => handleAddItem(item)}
                                onDecrease={() => handleRemoveItem(item.id)}
                                id={item.id}
                                name={item.name}
                                qty={item.qty}
                                price={item.price}
                            ></CartItem>
                        );
                    })}
                </ul>
            )}
            <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
            <div className="modal-actions">
                <Button type="button" textOnly onClick={handleCloseCart}>
                    Close
                </Button>

                <Button
                    type="button"
                    onClick={handleShowCheckout}
                    className={isDisabled ? "disabled" : undefined}
                    disabled={isDisabled}
                >
                    Go to checkout
                </Button>
            </div>
        </Modal>
    );
}
