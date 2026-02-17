import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, className = "" }) {
    const dialog = useRef();

    useEffect(() => {
        const dialogRef = dialog.current;
        if (open) {
            dialogRef.showModal();
        }
        return () => dialogRef.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`}>
            {children}
        </dialog>,
        document.getElementById("modal"),
    );
}
