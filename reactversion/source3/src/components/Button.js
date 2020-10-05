import React from 'react'
import Fractal from './graphieros/Fractal';
import './css/Button.css';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            <Fractal
                className={props.fractalClassName}
                sequence={props.sequence}
                colors={props.colors}
                svgSize={props.svgSize}
                light={true}
            />
            <p className={props.pClass}>
                {props.label}
            </p>
        </button>
    )
}

export default Button
