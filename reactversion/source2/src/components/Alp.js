import React from 'react';
import '../css/Alp.css';

const Alp = (props) => {
    return (

        <div>
            <svg className={props.className} version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8000 8000" preserveAspectRatio="xMidYMid meet">
                <g id="layer101" fill="none" strokeWidth="5">
                </g>

            </svg>
        </div>
    )
}

export default React.memo(Alp);