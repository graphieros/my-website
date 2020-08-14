import React from 'react';

const MenuCategory = (props) => {


    return (
        <div className={props.className} id={props.id} onClick={props.clicked}>
            <svg viewBox={props.viewbox} id={`svg${props.name}`}>
                <path
                    id={props.name}
                    fill="transparent"
                    d='M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0' />
                <text
                    alignmentBaseline={props.baseLine}
                    fontSize={props.fontSize}
                    fontFamily="'Megrim', cursive"
                    letterSpacing="20"
                    stroke={props.stroke}
                    fill={props.fill}
                    strokeWidth={props.strokewidth}>

                    <textPath
                        startOffset={props.startOffset}
                        xlinkHref={`#${props.name}`}>
                        {props.title}
                    </textPath>
                </text>
            </svg>
        </div >
    )
}

export default MenuCategory;