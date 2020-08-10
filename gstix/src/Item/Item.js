import React from 'react';


const Item = (props) => {

    return (
        <div className={props.className} id={props.id} onClick={props.show_modal_window}>
            <p>{props.name}</p>
            {props.children}
        </div>
    )
}

export default Item;