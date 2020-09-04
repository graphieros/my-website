import React from 'react';
import Linear from '../components/graphieros/Linear';

const Arrow = (props) => {

    return(
        <Linear
            className={props.className}
            sequence={props.sequence}
            colors={props.colors}
            size={props.size}
            cartouche={props.cartouche}
            background={props.background}
            padding={props.padding}
            border={props.border}
        />
    )
}

export default Arrow;