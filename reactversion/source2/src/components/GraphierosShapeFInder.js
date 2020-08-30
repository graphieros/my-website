import React, { useState } from 'react';
import Linear from '../components/graphieros/Linear';
import { a, q, w, l, lm, m, r, rm, graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import '../css/GraphierosShapeFinder.css'

let memory = [];
let cutPath = [];
let codeMemory = [];
let cutCode = [];

const GraphierosShapeFinder = () => {

    const [svgGroup, setSvgGroupState] = useState({
        content: <g />
    });

    const [resultState, setResultState] = useState({
        content: ''
    })


    const handleCoordinates = (props) => {

        const coordinates = [Number(props.target.cx.animVal.valueAsString), Number(props.target.cy.animVal.valueAsString)];
        codeMemory.push(coordinates);

        const X = Number(props.target.cx.animVal.valueAsString);
        const Y = Number(props.target.cy.animVal.valueAsString);
        memory.push(`${X} ${Y}`);

        let temp = memory.flat();
        let tempPath = `M ${temp}`;

        setSvgGroupState({
            content: <g>
                <path d={tempPath} />
                {cutPath.map(path => <path className="drawPath" key={path} d={path} />)}
            </g>
        })

    }

    const db = [...graphieros_dictionnary];

    const handleCut = () => {
        let flat = memory.flat();
        cutPath.push(`M ${flat}`);
        memory = [];

        let flatCode = codeMemory.flat();

        cutCode.push(flatCode);
        codeMemory = [];
        console.log({ cutCode });

        //now check if content of each array is the same as cutCode
        db.forEach(entry => {
            if (entry.path.toString() === cutCode.toString()) {
                setResultState({
                    content: <div>
                        <p>
                            concept: <span className='spanConcept'>{entry.fr}</span><br />
                            phono: <span className='spanPhono'>[ {entry.name.replace("_", "")} ]</span>
                        </p>
                        <Linear className='miniSvgResult'
                            sequence= {entry.name.replace("_","")}
                            colors={[255,99,71]}
                            size='50'
                        />
                    </div>
                })
            }

        })
        //also check if resversed paths also work
    }

    const handleReset = () => {
        setSvgGroupState({
            content: <g />
        });
        setResultState({
            content: ''
        });
        memory = [];
        cutPath = [];
        codeMemory = [];
        cutCode = [];

    }

    return (
        <div>

            <div className="svgInputWrapper">
                <svg
                    viewBox='0 0 256 256'
                    className="svgInput"
                >
                    {svgGroup.content}
                    <circle className='circleInput' id='m q' cx={m} cy={q} r='16' onClick={handleCoordinates} />
                    <circle className='circleInput' id='l q' cx={l} cy={q} r='16' onClick={handleCoordinates} />
                    <circle className='circleInput' id='lm a' cx={lm} cy={a} r='16' onClick={handleCoordinates} />
                    <circle className='circleInput' id='rm a' cx={rm} cy={a} r='16' onClick={handleCoordinates} />
                    <circle className='circleInput' id='r q' cx={r} cy={q} r='16' onClick={handleCoordinates} />
                    <circle className='circleInput' id='rm w' cx={rm} cy={w} r='16' onClick={handleCoordinates} />
                    <circle className='circleInput' id='lm w' cx={lm} cy={w} r='16' onClick={handleCoordinates} />

                </svg>

                <div className='btnControls'>
                    <button className='btnCUT' onClick={handleCut}>CUT</button>
                    <button className='btnRESET' onClick={handleReset}>RESET</button>
                </div>


                <div className="result">
                    {resultState.content}
                </div>
            </div>

        </div>
    )
}

export default GraphierosShapeFinder;