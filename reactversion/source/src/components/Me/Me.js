import React from 'react';

const Me = (props) => {

    return (
    <div className={props.className}><span id="spanA">A</span>{props.lec} <span id="spanL">L</span>{props.loyd} <span id="spanP">P</span>{props.robert}</div>
    )
}

export default Me;