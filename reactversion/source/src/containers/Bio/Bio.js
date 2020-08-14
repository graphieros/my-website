import React from 'react';

const Bio = (props) => {

    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Bio;