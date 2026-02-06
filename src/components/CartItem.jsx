import Button from "./UI/Button";

export default function CartItem({ ref, onGoToCheckout, meals }) {
    const totalPrice = meals.reduce(
        (acc, item) => (acc += item.qty * item.price),
        0,
    );

    console.log(totalPrice);

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
                                    <button>-</button>
                                    <p>{meal.qty}</p>
                                    <button>+</button>
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
