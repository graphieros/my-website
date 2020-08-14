import React from 'react';

const Portfolio = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Portfolio;