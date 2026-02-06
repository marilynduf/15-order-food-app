import Button from "./UI/Button";

export default function CartItem({ ref, onGoToCheckout }) {
    return (
        <dialog ref={ref} className="modal">
            <form method="dialog" className="cart">
                <h2>Your cart</h2>
                <ul>
                    <div className="cart-item">
                        <p>food</p>
                        <div className="cart-item-actions">
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="cart-item">
                        <p>food</p>
                        <div className="cart-item-actions">
                            <button>-</button>
                            <p>3</p>
                            <button>+</button>
                        </div>
                    </div>
                </ul>
                <p className="cart-total">100</p>
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
