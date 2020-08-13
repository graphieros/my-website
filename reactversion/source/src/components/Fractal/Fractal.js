import React from 'react'
import { callifractal } from '../../libraries/graphieros0.2';

const Fractal = (props) => {

    let fractal = callifractal({
        sequence: props.sequence,
        svgSize: props.svgSize,
        size: props.size,
        colors: props.colors,
        radius: props.radius,
        background: props.background,
        light: props.light,
        intensity: props.intensity,
        border: props.border,
        dropShadow: props.dropShadow,
        wrapperBackground: props.wrapperBackground,
        backgroundRadius: props.backgroundRadius
    });

    return(
        <div className={props.className} dangerouslySetInnerHTML={{__html: fractal}}></div>
        )
}

export default Fractal;