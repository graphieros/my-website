import React, { useState } from 'react';
import Linear from '../components/graphieros/Linear';
import { a, q, w, l, lm, m, r, rm, graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import permute from '../libraries/permute';
import pairSwap from '../libraries/pairSwap';
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
        let permutedArray = [];
        let permutedReversedArray = [];

        for (let i = 0; i < cutCode.length; i += 1) {
            reversedArray.push(pairSwap(cutCode[i]));
        }

        permutedArray = permute(cutCode);
        permutedReversedArray = permute(reversedArray);
        

        let pushResult = function (origin) {
            return possibleResults.push({ n: origin.name.replace("_", ""), f: origin.fr });
        }

        //now check if content of each array is the same as cutCode
        db.forEach(entry => {

            let thatSearch = entry.path.toString();

            if (thatSearch.includes(cutCode.toString())) {
                pushResult(entry);
            } else if (thatSearch.includes(reversedArray.toString())){
                pushResult(entry);
            } else if(thatSearch.includes(permutedArray.toString())){
                pushResult(entry);
            } else if(thatSearch.includes(permutedReversedArray.toString())){
                pushResult(entry);
            } else if (thatSearch.includes(cutCode[0].toString())) {
                if (cutCode[1] && thatSearch.includes(cutCode[1].toString())) {
                    if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (reversedArray[1] && thatSearch.includes(reversedArray[1].toString())) {
                    if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (permutedArray[1] && thatSearch.includes(permutedArray[1].toString())) {
                    if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (permutedReversedArray[1] && thatSearch.includes(permutedReversedArray[1].toString())) {
                    if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toSting())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }

            } else if (thatSearch.includes(reversedArray[0].toString())) {
                if (reversedArray[1] && thatSearch.includes(reversedArray[1].toString())) {
                    if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (permutedArray[1] && thatSearch.includes(permutedArray[1].toString())) {
                    if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (cutCode[1] && thatSearch.includes(cutCode[1].toString())) {
                    if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            } else if (thatSearch.includes(permutedArray[0].toString())) {
                if (permutedArray[1] && thatSearch.includes(permutedArray[1].toString())) {
                    if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (reversedArray[1] && thatSearch.includes(reversedArray[1].toString())) {
                    if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (cutCode[1] && thatSearch.includes(cutCode[1].toString())) {
                    if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            } else if (thatSearch.includes(permutedReversedArray[0].toString())) {
                if (permutedReversedArray[1] && thatSearch.includes(permutedReversedArray[1].toString())) {
                    if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (permutedArray[1] && thatSearch.includes(permutedArray[1].toString())) {
                    if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (reversedArray[1] && thatSearch.includes(reversedArray[1].toString())) {
                    if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (cutCode[1] && thatSearch.includes(cutCode[1].toString())) {
                    if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            } else if (cutCode[1] && thatSearch.includes(cutCode[1].toString())) {
                if (thatSearch.includes(cutCode[0].toString())) {
                    if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (thatSearch.includes(reversedArray[0].toString())) {
                    if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (thatSearch.includes(permutedArray[0].toString())) {
                    if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (thatSearch.includes(permutedReversedArray[0].toString)) {
                    if (permutedReversedArray[2] && thatSearch.includes(permutedReversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (permutedArray[2] && thatSearch.includes(permutedArray[2].toString())) {
                        pushResult(entry);
                    } else if (reversedArray[2] && thatSearch.includes(reversedArray[2].toString())) {
                        pushResult(entry);
                    } else if (cutCode[2] && thatSearch.includes(cutCode[2].toString())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            }

        });

        setOptionsState({
            content: <div className="optionDisplay">
                {possibleResults.map((res, i) => <div key={`${res}_${i}`}>
                    <Linear className='svgRes'
                        sequence={res.n}
                        colors={[250, 254, 255]}
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
                <p className='svgInputTitle'>Cliquez sur les points, et sur <b>CUT</b> pour lever le stylo</p>
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