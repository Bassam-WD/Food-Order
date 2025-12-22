import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children,onClose, open, className = "" }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current; // Best Practice 
    if (open) {
      modal.showModal();
    }

    return () => modal.close(); // clean up function
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
