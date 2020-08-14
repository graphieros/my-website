import React from 'react';
import './SubMenuContent.css';
import Fractal from '../Fractal/Fractal';

const SubMenuBioDo = () => {

    return (
        <div>
            <div className="bioDoTitle">
                <div id="fractalBioTitleWrapper">
                    <Fractal className='fractalBioTitle'
                        sequence='ex-dz-zq-qs-sw'
                        colors={[255, 255, 255]}
                        size='30'
                        svgSize='30'
                        radius='25'
                        background=''
                        light={true}
                        intensity='1.1'
                        border=''
                        backgroundRadius='100%'
                        dropShadow=''
                    />
                </div>

                <span className="spanSmall">Ce que je</span> <b>fais</b>
            </div>
            <div className="bioDoListWrapper">
                <div id="bioDoList0">
                    <Fractal className='fractalBio0'
                        sequence='qw-zw-ew-dw-xw'
                        colors={[68, 60, 15]}
                        size='20'
                        svgSize='10'
                        radius='10'
                        background=''
                        light={true}
                        intensity='1.1'
                        border=''
                        backgroundRadius='100%'
                        dropShadow=''
                    />
                web développement
            </div>

                <div id="bioDoList1">
                    <Fractal className='fractalBio1'
                        sequence='zs-se-qd-wx'
                        colors={[68, 60, 15]}
                        size='20'
                        svgSize='10'
                        radius='10'
                        background=''
                        light={true}
                        intensity='1.1'
                        border=''
                        backgroundRadius='100%'
                        dropShadow=''
                    />
                création de langue
            </div>

                <div id="bioDoList2">
                    <Fractal className='fractalBio2'
                        sequence='eq-qx-dq-zs-sw'
                        colors={[68, 60, 15]}
                        size='20'
                        svgSize='10'
                        radius='10'
                        background=''
                        light={true}
                        intensity='1.1'
                        border=''
                        backgroundRadius='100%'
                        dropShadow=''
                    />
                peinture
            </div>
            </div>


        </div>
    )
}

export default SubMenuBioDo;