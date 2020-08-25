import React from 'react';
import Fractal from '../graphieros/Fractal';
import './SubMenu.css';

const SubMenu = (props) => {
    return(
        <div className="subMenu">
            <Fractal className='subMenuSvg'
                svgSize={props.svgSize}
                sequence={`${props.sequence}`}
                colors={[props.R, props.G, props.B]}
                dropShadow={props.dropShadow}
                light={props.light}
                intensity={props.intensity}
            />
            <div className='subMenuText'>
                {props.content}
            </div>
        </div>
    )
}

export default SubMenu;