import React from 'react';
import clouds from '../../assets/clouds.png';
import './Modal.css';

const Modal = (props) => {

    const modalStyle = {
        backgroundImage: `url(${clouds})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <div
            className={props.className}
            style={modalStyle}
        >
            {props.children}
        </div>
    )
}

export default Modal;