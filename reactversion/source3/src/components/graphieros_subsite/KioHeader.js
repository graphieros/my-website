import React from 'react';
import Fractal from '../graphieros/Fractal';
import './css/KioHeader.css';

function KioHeader(props) {
    return (
        <div className='kio-header'>
            <Fractal
                className='kio-header-fractal'
                sequence={props.sequence}
                svgSize='150'
                colors={[75,106,160]}
                light={false}
                dropShadow='-3px -3px 5px rgba(255,255,255,0.6)'
            />
        </div>
    )
}

export default KioHeader
