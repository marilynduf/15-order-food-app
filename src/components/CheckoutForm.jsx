import Modal from "./UI/Modal";
import Button from "../components/UI/Button";
import { Input } from "./UI/Input";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

export default function CheckoutForm() {
    const { progress } = useContext(UserProgressContext);

    return (
        <Modal open={progress === "checkout"}>
            <form method="dialog">
                <h3>Checkout</h3>
                <p>Total Amount: </p>
                <Input
                    label="Full name"
                    type="text"
                    id="name"
                    name="name"
                ></Input>
                <Input
                    label="E-mail adress"
                    type="email"
                    id="email"
                    name="email"
                ></Input>
                <Input
                    label="Street"
                    type="text"
                    id="street"
                    name="street"
                ></Input>
                <div className="control-row">
                    <Input
                        label="Postal Code"
                        type="text"
                        id="postalCode"
                        name="postalCode"
                    ></Input>
                    <Input
                        label="City"
                        type="text"
                        id="city"
                        name="city"
                    ></Input>
                </div>
                <div className="modal-actions">
                    <Button type="button" textOnly>
                        Close
                    </Button>
                    <Button>Submit order</Button>
                </div>
            </form>
        </Modal>
    );
}
