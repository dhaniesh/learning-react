import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);
  return createPortal(
    <dialog className="modal" open={open} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
