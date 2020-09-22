import React from 'react';
import Fractal from '../components/graphieros/Fractal';
import './css/Logo.css';

function Logo(props) {

    const style={
        fontSize: props.fontSize,
        color : props.color
    }

    return (
        <div className='logo-body' style={style}>
            Graphieros
            <Fractal 
                className={props.className}
                sequence='wz-zd-dw-qs-se-xs'
                svgSize={props.svgSize}
                colors={props.colors}
            />
        </div>
    )
}

export default Logo;
