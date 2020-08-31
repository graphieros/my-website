import React, { useState } from 'react';
import Linear from '../components/graphieros/Linear';
import { a, q, w, l, lm, m, r, rm, graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import '../css/GraphierosShapeFinder.css'

let memory = [];
let cutPath = [];
let codeMemory = [];
let cutCode = [];
let possibleResults = [];

const GraphierosShapeFinder = (props) => {

    const [svgGroup, setSvgGroupState] = useState({
        content: <g />
    });

    const [resultState, setResultState] = useState({
        content: ''
    });

    const [optionsState, setOptionsState] = useState({
        content: ''
    });


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

        possibleResults = [];

        let flat = memory.flat();
        cutPath.push(`M ${flat}`);
        memory = [];

        let flatCode = codeMemory.flat();
        cutCode.push(flatCode);

        codeMemory = [];
        let reversedArray = [];
        let reversedArray1 = [];
        let reversedArray2 = [];

        if (cutCode[0].length === 4) {
            reversedArray.push(cutCode[0][2]);
            reversedArray.push(cutCode[0][3]);
            reversedArray.push(cutCode[0][0]);
            reversedArray.push(cutCode[0][1]);
        }

        if (cutCode[1] && cutCode[1].length === 4) {
            reversedArray1.push(cutCode[0][2]);
            reversedArray1.push(cutCode[0][3]);
            reversedArray1.push(cutCode[0][0]);
            reversedArray1.push(cutCode[0][1]);
        }

        if (cutCode[2] && cutCode[2].length === 4) {
            reversedArray2.push(cutCode[0][2]);
            reversedArray2.push(cutCode[0][3]);
            reversedArray2.push(cutCode[0][0]);
            reversedArray2.push(cutCode[0][1]);
        }

        if (cutCode[0].length === 6) {
            reversedArray.push(cutCode[0][4]);
            reversedArray.push(cutCode[0][5]);
            reversedArray.push(cutCode[0][2]);
            reversedArray.push(cutCode[0][3]);
            reversedArray.push(cutCode[0][0]);
            reversedArray.push(cutCode[0][1]);
        }

        if (cutCode[1] && cutCode[1].length === 6) {
            reversedArray1.push(cutCode[0][4]);
            reversedArray1.push(cutCode[0][5]);
            reversedArray1.push(cutCode[0][2]);
            reversedArray1.push(cutCode[0][3]);
            reversedArray1.push(cutCode[0][0]);
            reversedArray1.push(cutCode[0][1]);
        }

        if (cutCode[2] && cutCode[2].length === 6) {
            reversedArray2.push(cutCode[0][4]);
            reversedArray2.push(cutCode[0][5]);
            reversedArray2.push(cutCode[0][2]);
            reversedArray2.push(cutCode[0][3]);
            reversedArray2.push(cutCode[0][0]);
            reversedArray2.push(cutCode[0][1]);
        }

        if (cutCode[0].length === 8) {
            reversedArray.push(cutCode[0][6]);
            reversedArray.push(cutCode[0][7]);
            reversedArray.push(cutCode[0][4]);
            reversedArray.push(cutCode[0][5]);
            reversedArray.push(cutCode[0][2]);
            reversedArray.push(cutCode[0][3]);
            reversedArray.push(cutCode[0][0]);
            reversedArray.push(cutCode[0][1]);
        }

        if (cutCode[1] && cutCode[1].length === 8) {
            reversedArray1.push(cutCode[0][6]);
            reversedArray1.push(cutCode[0][7]);
            reversedArray1.push(cutCode[0][4]);
            reversedArray1.push(cutCode[0][5]);
            reversedArray1.push(cutCode[0][2]);
            reversedArray1.push(cutCode[0][3]);
            reversedArray1.push(cutCode[0][0]);
            reversedArray1.push(cutCode[0][1]);
        }

        if (cutCode[2] && cutCode[2].length === 8) {
            reversedArray2.push(cutCode[0][6]);
            reversedArray2.push(cutCode[0][7]);
            reversedArray2.push(cutCode[0][4]);
            reversedArray2.push(cutCode[0][5]);
            reversedArray2.push(cutCode[0][2]);
            reversedArray2.push(cutCode[0][3]);
            reversedArray2.push(cutCode[0][0]);
            reversedArray2.push(cutCode[0][1]);
        }

        if (cutCode[0].length === 10) {
            reversedArray.push(cutCode[0][8]);
            reversedArray.push(cutCode[0][9]);
            reversedArray.push(cutCode[0][6]);
            reversedArray.push(cutCode[0][7]);
            reversedArray.push(cutCode[0][4]);
            reversedArray.push(cutCode[0][5]);
            reversedArray.push(cutCode[0][2]);
            reversedArray.push(cutCode[0][3]);
            reversedArray.push(cutCode[0][0]);
            reversedArray.push(cutCode[0][1]);
        }

        if (cutCode[1] && cutCode[1].length === 10) {
            reversedArray1.push(cutCode[0][8]);
            reversedArray1.push(cutCode[0][9]);
            reversedArray1.push(cutCode[0][6]);
            reversedArray1.push(cutCode[0][7]);
            reversedArray1.push(cutCode[0][4]);
            reversedArray1.push(cutCode[0][5]);
            reversedArray1.push(cutCode[0][2]);
            reversedArray1.push(cutCode[0][3]);
            reversedArray1.push(cutCode[0][0]);
            reversedArray1.push(cutCode[0][1]);
        }

        if (cutCode[2] && cutCode[2].length === 10) {
            reversedArray2.push(cutCode[0][8]);
            reversedArray2.push(cutCode[0][9]);
            reversedArray2.push(cutCode[0][6]);
            reversedArray2.push(cutCode[0][7]);
            reversedArray2.push(cutCode[0][4]);
            reversedArray2.push(cutCode[0][5]);
            reversedArray2.push(cutCode[0][2]);
            reversedArray2.push(cutCode[0][3]);
            reversedArray2.push(cutCode[0][0]);
            reversedArray2.push(cutCode[0][1]);
        }

        if (cutCode[0].length === 12) {
            reversedArray.push(cutCode[0][10]);
            reversedArray.push(cutCode[0][11]);
            reversedArray.push(cutCode[0][8]);
            reversedArray.push(cutCode[0][9]);
            reversedArray.push(cutCode[0][6]);
            reversedArray.push(cutCode[0][7]);
            reversedArray.push(cutCode[0][4]);
            reversedArray.push(cutCode[0][5]);
            reversedArray.push(cutCode[0][2]);
            reversedArray.push(cutCode[0][3]);
            reversedArray.push(cutCode[0][0]);
            reversedArray.push(cutCode[0][1]);
        }

        if (cutCode[1] && cutCode[1].length === 12) {
            reversedArray1.push(cutCode[0][10]);
            reversedArray1.push(cutCode[0][11]);
            reversedArray1.push(cutCode[0][8]);
            reversedArray1.push(cutCode[0][9]);
            reversedArray1.push(cutCode[0][6]);
            reversedArray1.push(cutCode[0][7]);
            reversedArray1.push(cutCode[0][4]);
            reversedArray1.push(cutCode[0][5]);
            reversedArray1.push(cutCode[0][2]);
            reversedArray1.push(cutCode[0][3]);
            reversedArray1.push(cutCode[0][0]);
            reversedArray1.push(cutCode[0][1]);
        }

        if (cutCode[2] && cutCode[2].length === 12) {
            reversedArray2.push(cutCode[0][10]);
            reversedArray2.push(cutCode[0][11]);
            reversedArray2.push(cutCode[0][8]);
            reversedArray2.push(cutCode[0][9]);
            reversedArray2.push(cutCode[0][6]);
            reversedArray2.push(cutCode[0][7]);
            reversedArray2.push(cutCode[0][4]);
            reversedArray2.push(cutCode[0][5]);
            reversedArray2.push(cutCode[0][2]);
            reversedArray2.push(cutCode[0][3]);
            reversedArray2.push(cutCode[0][0]);
            reversedArray2.push(cutCode[0][1]);
        }

        if (cutCode[0].length === 14) {
            reversedArray.push(cutCode[0][12]);
            reversedArray.push(cutCode[0][13]);
            reversedArray.push(cutCode[0][10]);
            reversedArray.push(cutCode[0][11]);
            reversedArray.push(cutCode[0][8]);
            reversedArray.push(cutCode[0][9]);
            reversedArray.push(cutCode[0][6]);
            reversedArray.push(cutCode[0][7]);
            reversedArray.push(cutCode[0][4]);
            reversedArray.push(cutCode[0][5]);
            reversedArray.push(cutCode[0][2]);
            reversedArray.push(cutCode[0][3]);
            reversedArray.push(cutCode[0][0]);
            reversedArray.push(cutCode[0][1]);
        }

        if (cutCode[1] && cutCode[1].length === 14) {
            reversedArray1.push(cutCode[0][12]);
            reversedArray1.push(cutCode[0][13]);
            reversedArray1.push(cutCode[0][10]);
            reversedArray1.push(cutCode[0][11]);
            reversedArray1.push(cutCode[0][8]);
            reversedArray1.push(cutCode[0][9]);
            reversedArray1.push(cutCode[0][6]);
            reversedArray1.push(cutCode[0][7]);
            reversedArray1.push(cutCode[0][4]);
            reversedArray1.push(cutCode[0][5]);
            reversedArray1.push(cutCode[0][2]);
            reversedArray1.push(cutCode[0][3]);
            reversedArray1.push(cutCode[0][0]);
            reversedArray1.push(cutCode[0][1]);
        }

        if (cutCode[2] && cutCode[2].length === 14) {
            reversedArray2.push(cutCode[0][12]);
            reversedArray2.push(cutCode[0][13]);
            reversedArray2.push(cutCode[0][10]);
            reversedArray2.push(cutCode[0][11]);
            reversedArray2.push(cutCode[0][8]);
            reversedArray2.push(cutCode[0][9]);
            reversedArray2.push(cutCode[0][6]);
            reversedArray2.push(cutCode[0][7]);
            reversedArray2.push(cutCode[0][4]);
            reversedArray2.push(cutCode[0][5]);
            reversedArray2.push(cutCode[0][2]);
            reversedArray2.push(cutCode[0][3]);
            reversedArray2.push(cutCode[0][0]);
            reversedArray2.push(cutCode[0][1]);
        }

        //now check if content of each array is the same as cutCode
        db.forEach(entry => {

            if (entry.path.toString().includes(cutCode[0].toString())) {
                if (cutCode[1] && entry.path.toString().includes(cutCode[1].toString())) {
                    possibleResults.push({ n: entry.name.replace("_", ""), f: entry.fr });
                } else if (cutCode[1] && entry.path.toString().includes(reversedArray1.toString())) {
                    possibleResults.push({ n: entry.name.replace("_", ""), f: entry.fr });
                } else {
                    possibleResults.push({ n: entry.name.replace("_", ""), f: entry.fr });
                }

            } else if (entry.path.toString().includes(reversedArray.toString())) {
                if (cutCode[1] && entry.path.toString().includes(cutCode[1].toString())) {
                    possibleResults.push({ n: entry.name.replace("_", ""), f: entry.fr });
                } else if (cutCode[1] && entry.path.toString().includes(reversedArray1.toString())) {
                    possibleResults.push({ n: entry.name.replace("_", ""), f: entry.fr });
                }
            } else if (entry.path.toString().includes(reversedArray1.toString())) {
                if (cutCode[2] && entry.path.toString().includes(cutCode[2].toString())) {
                    possibleResults.push({ n: entry.name.replace("_", ""), f: entry.fr });
                } else if (cutCode[2] && entry.path.toString().includes(reversedArray2.toString())) {
                    possibleResults.push({ n: entry.name.replace("_", ""), f: entry.fr });
                }
            }
        });
        
        setOptionsState({
            content: <div className="optionDisplay">
                {possibleResults.map((res, i) => <div key={`${res}_${i}`}>
                    <Linear className='svgRes'
                        sequence={res.n}
                        colors={[250,254,255]}
                        size='30'
                    />
                    <span>{res.f}</span>
                    <span className="spanPhonoOpt">[ {res.n} ]</span>
                </div>)}
            </div>
        });
    }


    const handleReset = () => {
        setSvgGroupState({
            content: <g />
        });
        setResultState({
            content: ''
        });
        setOptionsState({
            content: ''
        });
        memory = [];
        cutPath = [];
        codeMemory = [];
        cutCode = [];
        possibleResults = [];
    }

    return (
        <div className={props.className}>

            <div className="svgInputWrapper">
                {props.children}
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
                <div>
                    {optionsState.content}
                </div>
            </div>

        </div>
    )
}

export default GraphierosShapeFinder;