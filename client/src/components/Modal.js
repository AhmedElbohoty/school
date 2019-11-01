import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  const component = <div className="modal">{children}</div>;

  return ReactDOM.createPortal(component, document.querySelector("#modal"));
}

export default Modal;
