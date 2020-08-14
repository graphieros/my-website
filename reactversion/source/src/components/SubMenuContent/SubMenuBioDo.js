import React from 'react';
import './SubMenuContent.css';
import Fractal from '../Fractal/Fractal';

const SubMenuBioDo = () => {

    return (
        <div>
            <div className="bioDoTitle">
                <span className="spanSmall">Ce que je</span> <b>fais</b>
            </div>

            <div className="bioDoList">
                <Fractal className='fractalBio0'
                    sequence='qw-zw-ew-dw-xw'
                    colors={[10, 10, 10]}
                    size='20'
                    svgSize= '10'
                    radius=''
                    background=''
                    light={true}
                    intensity='1.1'
                    border=''
                    backgroundRadius='100%'
                    dropShadow=''
                />
                web développement
            </div>

        </div>
    )
}

export default SubMenuBioDo;