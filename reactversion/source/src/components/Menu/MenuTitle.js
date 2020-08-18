import React from 'react';

const MenuTitle = (props) => {

    return(
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default MenuTitle;