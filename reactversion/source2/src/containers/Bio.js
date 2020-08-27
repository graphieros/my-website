import React from 'react';
import Fractal from '../components/graphieros/Fractal';
import './css/Bio.css';
import alp from '../assets/alp.jpg';

const Bio = () => {
    return (
        <div>

            <div className='bioFractalWrapper'>
                <Fractal
                    sequence='we-xs-dz-ze-ed-dx-xw-wq-qz zx-ws-qe ze-eq-xw-wd'
                    colors={[122,161,216]}
                    svgSize='300'
                    light={true}
                    intensity='2'
                />
            </div>

            <div className="biopicWrapper">
                <img src={alp} alt="alp" />
            </div>

        </div>
    )
}

export default Bio;