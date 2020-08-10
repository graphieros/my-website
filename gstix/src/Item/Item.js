import React from 'react';


const Item = (props) => {

    
    return (
        <div className={props.className} id={props.id}>
            <p>{props.name}</p>
            {props.children}
        </div>
    )
}

export default Item;