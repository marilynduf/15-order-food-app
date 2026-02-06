import Button from "./UI/Button";

export default function CartItem({
    ref,
    onGoToCheckout,
    meals,
    onAddSameItemAgain,
    onDeleteSameItemAgain,
}) {
    const totalPrice = meals.reduce(
        (acc, item) => (acc += item.qty * item.price),
        0,
    );

    return (
        <dialog ref={ref} className="modal">
            <form method="dialog" className="cart">
                <h2>Your cart</h2>
                <ul>
                    {meals.map((meal) => {
                        return (
                            <div className="cart-item">
                                <p>{`${meal.name} - ${meal.qty} x $${meal.price}`}</p>
                                <div className="cart-item-actions">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onDeleteSameItemAgain(meal.id)
                                        }
                                    >
                                        -
                                    </button>
                                    <p>{meal.qty}</p>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            onAddSameItemAgain(meal.id)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </ul>

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
