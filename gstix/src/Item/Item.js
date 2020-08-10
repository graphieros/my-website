import React from 'react';


const Item = (props) => {
    return (
        <div className={props.className} id={props.id}>
            <p>{props.name}</p>
        </div>
    )
}

export default Item;