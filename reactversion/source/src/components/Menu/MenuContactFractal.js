import React from 'react';
import Fractal from '../Fractal/Fractal';

const MenuContactFractal = (props) => {
    return(
        <Fractal className={props.className}
            sequence = 'qw-wd-de-eq-qs-se'
            colors={[100,100,100]}
            size='10'
            svgSize='70'
            radius=''
            background=''
            light={true}
            intensity=''
            border=''
            backgroundRadius='100%'
            dropShadow='0 0px 1px black'
        />
    )
}

export default MenuContactFractal;