import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = function Modal({ children, ref, buttonCaption }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounder-md shadow-md">
      {children}
      <div className=" mt-4 text-right">
        <Button onClick={() => dialog.current.close()}>{buttonCaption}</Button>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
