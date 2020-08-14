import React from 'react';
import './SubMenuContent.css';

const SubMenuContent = (props) => {

    const style={
        position: 'fixed',
        top: '0',
        left: '0'
    }

    return(
        <div style={style}>
        
            {props.Children}
        </div>
    )
}

export default SubMenuContent;