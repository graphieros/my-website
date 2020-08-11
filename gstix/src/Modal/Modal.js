import React from 'react';
import standard_laptop from '../Pics/standard_laptop.png';

const Modal = (props) => {

    let style;

    if(props.className === "invisible") {
        style = {
            display: 'none',
        }
    } else {
        style = {
            display: 'block',
            position: 'fixed',
            zIndex: '101',
            height: '500px',
            width: '600px',
            background: 'white',
            marginLeft: '50%',
            transform: 'translate(-50%)',
            borderRadius: '3px',
            boxShadow: '0px 0px 20px -5px grey',
            top: '110px',
            transition: 'opacity 0.3s ease',
            opacity: '1'
        }
    }


    return(
        <section id={props.id} style={style}>
            {props.children}
            <img id="standard_laptop" src={standard_laptop} alt="standard laptop" />
        </section>
    )
}

export default Modal;