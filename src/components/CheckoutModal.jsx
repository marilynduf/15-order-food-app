export default function CheckoutModal() {
    return (
        <form action="">
            <h3>Checkout</h3>
            <p>Total Amount: </p>
            <div>
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" />
            </div>
            <div>
                <label htmlFor="email">E-mail adress</label>
                <input id="email" type="text" />
            </div>
            <div>
                <label htmlFor="street">Street</label>
                <input id="street" type="text" />
            </div>
            <div>
                <label htmlFor="postalCode">Postal Code</label>
                <input id="postalCode" type="text" />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input id="city" type="text" />
            </div>
            <div>
                <button>Close</button>
                <button class="button">Submit order</button>
            </div>
        </form>
    );
}
