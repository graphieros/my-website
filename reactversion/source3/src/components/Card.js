import React from 'react';
import './css/Card.css';
import Fractal from './graphieros/Fractal';

function Card(props) {
    return (
        <div>
            <div className='card-close' onClick={props.close}>
                <Fractal
                    className='card-close-fractal'
                    sequence='zx-we'
                    svgSize='30'
                    colors={[255, 255, 255]}
                />
            </div>

            <div className='card-id'>

                <Fractal
                    className='card-fractal'
                    sequence={props.sequence}
                    svgSize='100'
                    colors={[75, 106, 160]}
                />

                <div className='card-id-details'>
                    <p>{props.french}</p>
                    <p className='card-id-details-phono'>[ {props.glyphName.replace('_', '')} ]</p>
                </div>

                <p className="card-id-details-type">
                    type: {props.glyphType}
                </p>

            </div>

            <p className='card-id-story'>{props.glyphDescription}</p>

        </div>
    )
}

export default Card;
