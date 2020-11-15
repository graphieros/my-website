import React from 'react';
import Fractal from './graphieros/Fractal';
import './css/StarExplosion.css';

const StarExplosion = (props) => {
    return (
        <div className={props.className}>
            <Fractal
                className='starExplode-0'
                sequence='zw-wd-dz-qs-se-xs'
                colors={[255,255,255]} 
                svgSize='200'
            />
            <Fractal
                className='starExplode-1'
                sequence='zs-se-ez-wq-qd-dx'
                colors={[255,255,255]} 
                svgSize='200'
            />
            <Fractal
                className='starExplode-2'
                sequence='qd-dw-ex'
                colors={[255,255,255]} 
                svgSize='200'
            />
            <Fractal
                className='starExplode-3'
                sequence='zw-wd-dz-qe-ex-xq'
                colors={[255,255,255]} 
                svgSize='200'
            />
            <Fractal
                className='starExplode-4'
                sequence='qw-wz-sx-xe'
                colors={[255,255,255]} 
                svgSize='200'
            />
            <Fractal
                className='starExplode-5'
                sequence='zx-ws-qe'
                colors={[255,255,255]} 
                svgSize='200'
            />
        </div>
    )
}

export default React.memo(StarExplosion);
