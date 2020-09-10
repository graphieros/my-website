import React from 'react';
import '../css/Bubble.css';

const Bubble = (props) => {
    return(
        <div 
            className={props.className}
            onClick={props.onClick} >
                {props.content}
            </div>
    )
}

export default React.memo(Bubble);