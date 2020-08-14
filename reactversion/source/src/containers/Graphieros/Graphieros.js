import React from 'react';

const Graphieros = (props) => {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Graphieros;