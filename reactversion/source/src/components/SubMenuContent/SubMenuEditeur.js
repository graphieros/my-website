import React from 'react';
// import graphieros library
import './SubMenuEditeur.css';

const SubMenuEditeur = () => {
    
    const construction = {
        display: 'block',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        background: 'tomato',
        color: 'white',
        fontSize: '1.3em',
        boxSizing: 'border-box',
        padding: '10px',
        borderRadius: '3px',
        textAlign: 'center',
        boxShadow: '0 18px 40px -12px rgba(100,0,0,0.3)'
    }

    return(
        <div>
            <div style={construction}>
                Cette page est en cours de construction.
            </div>
        </div>
    )
}

export default SubMenuEditeur;