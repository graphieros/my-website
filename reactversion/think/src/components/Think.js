import React from 'react';
import './css/Think.css';
import Fractal from '../components/graphieros/Fractal';

const Think = (props) => {

    const style= {
        fontSize: props.fontSize,
        color: props.color
    }

    return(
        <div className='thinkLogoWrapper'>
            <p className='thinkLogo' style={style}>think</p>
            <Fractal
                className='fractalLogo'
                svgSize='80'
                sequence='wz-zd-dw-qs-se-xs'
                colors={[255,255,255]}
            /> 
        </div>
    )
}

export default Think;