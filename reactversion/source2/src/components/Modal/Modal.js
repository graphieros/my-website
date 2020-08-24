import React from 'react';
import './Modal.css';

const Modal = (props) => {

    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Modal;