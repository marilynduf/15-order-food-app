import Button from "../components/UI/Button";

export default function CheckoutForm({ ref }) {
    return (
        <dialog ref={ref} className="modal">
            <form method="dialog">
                <h3>Checkout</h3>
                <p>Total Amount: </p>
                <div className="control">
                    <label htmlFor="name">Full name</label>
                    <input id="name" type="text" />
                </div>
                <div className="control">
                    <label htmlFor="email">E-mail adress</label>
                    <input id="email" type="text" />
                </div>
                <div className="control">
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />
                </div>
                <div className="control-row">
                    <div className="control">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input id="postalCode" type="text" />
                    </div>
                    <div className="control">
                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />
                    </div>
                </div>
                <div className="modal-actions">
                    <Button textOnly>Close</Button>
                    <Button>Submit order</Button>
                </div>
            </form>
        </dialog>
    );
}
