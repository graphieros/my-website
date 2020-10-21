import React from 'react'
import { fractal } from '../../libraries/graphieros0.2';

const FlatFractal = (props) => {

    const style={
        width:`${props.svgSize}px`,
        height:`${props.svgSize}px`,
        marginLeft: '50%',
        transform: 'translateX(-50%)'
    }

    let frac = fractal({
        sequence: props.sequence,
        size: props.size,
        svgSize: props.svgSize,
        colors: props.colors,
        light: props.light,
        intensity: props.intensity,
    });

    return (
        <div 
            className={props.className} 
            style={style} 
            dangerouslySetInnerHTML={{ __html: frac }}/>
    )
}

export default React.memo(FlatFractal);