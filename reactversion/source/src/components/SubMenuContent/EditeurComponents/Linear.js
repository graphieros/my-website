import React from 'react';
import { linear } from '../../../libraries/graphieros0.2';

const LineGlyph = (props) => {

    let line = linear({
        sequence: props.sequence,
        size: props.size,
        background: props.background,
        colors: props.colors,
        padding: props.padding,
        cartouche: props.cartouche,
        border: props.border
    });

    return (
        <div className={props.className} dangerouslySetInnerHTML={{ __html: line }}></div>
    )
}

export default LineGlyph;