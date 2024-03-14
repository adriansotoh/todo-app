import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal(props) {
    const { children } = props;
    return (
        ReactDOM.createPortal(
            <div className="Modal">
                {children}
            </div>,
            document.getElementById("modal")
        )
    );
}

export { Modal };