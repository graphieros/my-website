import React from 'react';

const Buy = () => {

    const style = {
        display: 'grid',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%)',
        bottom: '10px',
        fontFamily: "'Lobster', cursive",
        fontSize: '1.5em',
        height: '60px',
        width: '170px',
        boxSizing: 'border-box',
        padding: '10px',
        textAlign: 'center',
        textShadow: '1px 1px rgb(100,130,150)',
        color: 'white',
        background: 'radial-gradient(at top, rgb(180,204,219), rgb(100,130,150))',
        borderRadius: '3px',
        boxShadow: '0 0 10px -3px rgba(77,53,33,0.75)',
        opacity: '0.85',
        transition: 'opacity 0.3s ease',
        cursor: 'pointer'
    }

    return(
        <div id="buy" style={style}>I want that!</div>
    )
}

export default Buy;