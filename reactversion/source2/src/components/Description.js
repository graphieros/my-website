import React from 'react';
import '../css/Description.css';

const Description = (props) => {
    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Description;