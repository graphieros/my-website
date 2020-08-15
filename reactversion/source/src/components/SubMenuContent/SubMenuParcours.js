import React from 'react';
import './SubMenuContent.css';
import Fractal from '../Fractal/Fractal';

const SubMenuParcours = () => {

    return (
        <div>
            <div className="bioParcoursTitle">
                <div id="fractalParcoursTitleWrapper">
                    <Fractal className='fractalParcoursTitle'
                        sequence='ez-zq-qw-wx-xd-ds de-ex-xd-sz-zw-ws-dq'
                        colors={[255, 255, 255]}
                        size='30'
                        svgSize='30'
                        radius='20'
                        background=''
                        light={true}
                        intensity='1.1'
                        border=''
                        backgroundRadius='100%'
                        dropShadow=''
                    />
                </div>

                <span className="spanSmall">Mon</span> <b>parcours</b>
            </div>
        </div>
    )
}

export default SubMenuParcours;