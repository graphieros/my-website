import React, { useState } from 'react';
import Linear from '../components/graphieros/Linear';
import graphieros_dictionnary from '../libraries/graphieros_dictionnary';
import './css/Graphieros.css';

let memory = [];
let cutPath = [];

const Graphieros = () => {

    const [ svgGroup, setSvgGroupState ] = useState({
        content: <g></g>
    });


    const handleCoordinates = (props) => {
        
        const X = Number(props.target.cx.animVal.valueAsString);
        const Y = Number(props.target.cy.animVal.valueAsString);
        memory.push(`${X} ${Y}`);

        setSvgGroupState({
            content: <g>
                {cutPath.map(path => <g key={path}>{path}</g>)}
            </g>
        })
     
    }

    const handleCut = () => {
        let flat = memory.flat();
        cutPath.push(`<path d="M ${flat}"/>`);
        memory = [];
    }

    return(
        <div>

            <div className="svgInputWrapper">
                <svg
                    viewBox='0 0 256 256'
                    className="svgInput"
                >
                    <circle cx='128' cy='128' r='16' onClick={handleCoordinates}/>
                    <circle cx='20' cy='128' r='16' onClick={handleCoordinates}/>
                    <circle cx='74' cy='36' r='16' onClick={handleCoordinates}/>
                    <circle cx='182' cy='36' r='16' onClick={handleCoordinates}/>
                    <circle cx='236' cy='128' r='16' onClick={handleCoordinates}/>
                    <circle cx='182' cy='220' r='16' onClick={handleCoordinates}/>
                    <circle cx='74' cy='220' r='16' onClick={handleCoordinates}/>
                    {svgGroup.content}
                </svg>

                <button onClick={handleCut}>
                    CUT
                </button>
            </div>

        </div>
    )
}

export default Graphieros;