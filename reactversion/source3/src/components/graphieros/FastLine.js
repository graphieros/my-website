import React from 'react';
import { fastLine } from '../../libraries/graphieros0.2';

//the DIV needs to have a defined css height

const FastLine = (props) => {

    const fl = fastLine({
        sequence:props.sequence,
        width: props.width,
        colors: props.colors
    });

    return (
         <div className={props.className} dangerouslySetInnerHTML={{ __html: fl }}></div>
    );
}

export default FastLine;
