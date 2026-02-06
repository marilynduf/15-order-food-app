import Button from "./UI/Button";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function CartItem({ ref, onGoToCheckout }) {
    const { items, addSameItemAgain, deleteSameItemAgain } =
        useContext(CartContext);

    const totalPrice = items.reduce(
        (acc, item) => (acc += item.qty * item.price),
        0,
    );

    return (
        <dialog ref={ref} className="modal">
            <form method="dialog" className="cart">
                <h2>Your cart</h2>
                {items.length === 0 && <p>No meal added to cart</p>}
                {items.length > 0 && (
                    <ul>
                        {items.map((item) => {
                            return (
                                <div className="cart-item">
                                    <p>{`${item.name} - ${item.qty} x $${item.price}`}</p>
                                    <div className="cart-item-actions">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                deleteSameItemAgain(item.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <p>{item.qty}</p>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                addSameItemAgain(item.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                )}
                <p className="cart-total">{totalPrice}</p>
                <div className="modal-actions">
                    <Button textOnly>Close</Button>
                    <Button type="button" onClick={onGoToCheckout}>
                        Go to checkout
                    </Button>
                </div>
            </form>
        </dialog>
    );
}
