import React from 'react';
import { molecular } from '../../libraries/graphieros0.2';

const Molecule = (props) => {

    let molecule = molecular({
        sequence: props.sequence,
        size: props.size,
        colors: props.colors,
        borderRadius: props.borderRadius,
        background: props.background,
        strokeWidth: props.strokeWidth,
        border: props.border
    });
    
    return(
    <div className={props.className} dangerouslySetInnerHTML={{__html: molecule}}></div>
    )
}

export default Molecule;