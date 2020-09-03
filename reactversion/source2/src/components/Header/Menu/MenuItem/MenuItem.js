import React from 'react';
import Linear from '../../../graphieros/Linear';
import './MenuItem.css';

const MenuItem = (props) => {

    const btnStyle = {
        background: props.color,
        width: '100%',
        border: 'none',
        borderRadius: '3px',
        height: '90px',
        marginBottom: '10px',
        fontSize: '1.1em',
        boxShadow: '0 5px 10px -5px rgba(29,55,104,0.95)',
        color: 'var(--blue1)',
        transform: `rotateY(${props.rotate}deg)`,
        cursor: 'pointer'
    }

    return (
        <div className={props.className} id={props.id}>

            <button
                className='menuItemBtn'
                style={btnStyle}>

                <Linear
                    className='menuItemSvg'
                    sequence={props.sequence.replace("_", "")}
                    size='30'
                    colors={[props.R, props.G, props.B]}
                    background='white'
                    cartouche={false}
                />
                {props.content}

            </button>

        </div>
    )
}

export default MenuItem;