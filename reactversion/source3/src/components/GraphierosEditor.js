import React from 'react';
import './css/GraphierosEditor.css';

function GraphierosEditor(props) {
    return (
        <div className={props.className}>
            {props.children}
            <textarea placeholder='...'></textarea>
        </div>
    )
}

export default GraphierosEditor;
