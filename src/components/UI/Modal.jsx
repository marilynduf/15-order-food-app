import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        }
    }, [open]);

    console.log("cartModal: ", dialog);

    return createPortal(
        <dialog ref={dialog} className="modal">
            {children}
        </dialog>,
        document.getElementById("modal"),
    );
}
