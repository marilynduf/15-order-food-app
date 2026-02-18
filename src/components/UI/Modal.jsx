import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({
    open,
    children,
    className = "",
    handleCloseCart,
}) {
    const dialog = useRef();

    useEffect(() => {
        const dialogRef = dialog.current;
        if (open) {
            dialogRef.showModal();
        }
        return () => dialogRef.close();
    }, [open]);

    const handleCloseDialogESC = function () {
        console.log("clooosse");
    };

    return createPortal(
        <dialog
            ref={dialog}
            className={`modal ${className}`}
            onClose={handleCloseCart}
        >
            {children}
        </dialog>,
        document.getElementById("modal"),
    );
}
