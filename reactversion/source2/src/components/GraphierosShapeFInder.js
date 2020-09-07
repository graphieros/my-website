import React, { useState } from 'react';
import Linear from '../components/graphieros/Linear';
import { a, q, w, l, lm, m, r, rm, graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import permute from '../libraries/permute';
import '../css/GraphierosShapeFinder.css';
import { pairSwap, changeLoop } from '../libraries/pairSwap';

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
        let shifted0 = changeLoop(cutCode[0]);
        
        let shifted0a;
        let rs0a;
        let shifted0b;
        let rs0b;
        let shifted0c;
        let rs0c;
        let shifted0d;
        let rs0d;
        let shifted0e;
        let rs0e;
        let shifted0f;
        let rs0f;
        let shifted0g;
        let rs0g;
        let shifted0h;
        let rs0h;
        let shifted0i;
        let rs0i;
        let shifted0j;
        let rs0j;
        let shifted0k;
        let rs0k;
        let shifted0l;
        let rs0l;
        let shifted0m;
        let rs0m;
        let shifted0n;
        let rs0n;
        let shifted0o;
        let rs0o;
        let shifted0p;
        let rs0p;
        let shifted0q;
        let rs0q;
        let shifted0r;
        let rs0r;
        let shifted0s;
        let rs0s;
        let shifted0t;
        let rs0t;
        let shifted0u;
        let rs0u;
        let shifted0v;
        let rs0v;
        let shifted0w;
        let rs0w;
        let shifted0x;
        let rs0x;


        let shifted1;
        let shifted1a;

        let shifted2;
        let shifted2a;
        
        if (shifted0 && cutCode[0]) {
            shifted0a = changeLoop(shifted0);
            shifted0b = changeLoop(shifted0a);
            shifted0c = changeLoop(shifted0b);
            shifted0d = changeLoop(shifted0c);
            shifted0e = changeLoop(shifted0d);
            shifted0f = changeLoop(shifted0e);
            shifted0g = changeLoop(shifted0f);
            shifted0h = changeLoop(shifted0g);
            shifted0i = changeLoop(shifted0h);
            shifted0j = changeLoop(shifted0i);
            shifted0k = changeLoop(shifted0j);
            shifted0l = changeLoop(shifted0k);
            shifted0m = changeLoop(shifted0l);
            shifted0n = changeLoop(shifted0m);
            shifted0o = changeLoop(shifted0n);
            shifted0p = changeLoop(shifted0o);
            shifted0q = changeLoop(shifted0p);
            shifted0r = changeLoop(shifted0q);
            shifted0s = changeLoop(shifted0r);
            shifted0t = changeLoop(shifted0s);
            shifted0u = changeLoop(shifted0t);
            shifted0v = changeLoop(shifted0u);
            shifted0w = changeLoop(shifted0v);
            shifted0x = changeLoop(shifted0w);
            rs0a = pairSwap(shifted0a);
            rs0b = pairSwap(shifted0b);
            rs0c = pairSwap(shifted0c);
            rs0d = pairSwap(shifted0d);
            rs0e = pairSwap(shifted0e);
            rs0f = pairSwap(shifted0f);
            rs0g = pairSwap(shifted0g);
            rs0h = pairSwap(shifted0h);
            rs0i = pairSwap(shifted0i);
            rs0j = pairSwap(shifted0j);
            rs0k = pairSwap(shifted0k);
            rs0l = pairSwap(shifted0l);
            rs0m = pairSwap(shifted0m);
            rs0n = pairSwap(shifted0n);
            rs0o = pairSwap(shifted0o);
            rs0p = pairSwap(shifted0p);
            rs0q = pairSwap(shifted0q);
            rs0r = pairSwap(shifted0r);
            rs0s = pairSwap(shifted0s);
            rs0t = pairSwap(shifted0t);
            rs0u = pairSwap(shifted0u);
            rs0v = pairSwap(shifted0v);
            rs0w = pairSwap(shifted0w);
            rs0x = pairSwap(shifted0x);   
        }

        if (shifted1 && cutCode[1]) {
            shifted1 = changeLoop(cutCode[1]);
            shifted1a = changeLoop(shifted1);
        }
        if (shifted2 && cutCode[2]) {
            shifted2 = changeLoop(cutCode[2]);
            shifted2a = changeLoop(shifted2);
        }

        for (let i = 0; i < cutCode.length; i += 1) {
            reversedArray.push(pairSwap(cutCode[i]));
        }



        permutedArray = permute(cutCode);
        permutedReversedArray = permute(reversedArray);

        const pushResult = function (origin) {
            return possibleResults.push({ n: origin.name.replace("_", ""), f: origin.fr });
        }

        const itMatches = function (searchFunction, searchedArray) {
            return searchedArray && searchFunction.includes(searchedArray.toString());
        }

        //now check if content of each array is the same as cutCode
        db.forEach(entry => {

            let thatSearch = entry.path.toString();

            if (itMatches(thatSearch, cutCode) || itMatches(thatSearch, reversedArray) || itMatches(thatSearch, permutedArray) || itMatches(thatSearch, permutedReversedArray) || itMatches(thatSearch, shifted0) || itMatches(thatSearch, shifted0a) || itMatches(thatSearch, shifted0b) || itMatches(thatSearch, shifted0c) || itMatches(thatSearch, shifted0d) || itMatches(thatSearch, shifted0e) || itMatches(thatSearch, shifted0f) || itMatches(thatSearch, shifted0g) || itMatches(thatSearch, shifted0h) || itMatches(thatSearch, shifted0i) || itMatches(thatSearch, shifted0j) || itMatches(thatSearch, shifted0k) || itMatches(thatSearch, shifted0l) || itMatches(thatSearch, shifted0m) || itMatches(thatSearch, shifted0n) || itMatches(thatSearch, shifted0o) || itMatches(thatSearch, shifted0p) || itMatches(thatSearch, shifted0q) || itMatches(thatSearch, shifted0r) || itMatches(thatSearch, shifted0s) || itMatches(thatSearch, shifted0t) || itMatches(thatSearch, shifted0u) || itMatches(thatSearch, shifted0v) || itMatches(thatSearch, shifted0w) || itMatches(thatSearch, shifted0x) || itMatches(thatSearch, shifted1) || itMatches(thatSearch, shifted1a) || itMatches(thatSearch, shifted2) || itMatches(thatSearch, shifted2a) || itMatches(thatSearch, rs0a) || itMatches(thatSearch, rs0b) || itMatches(thatSearch, rs0c) || itMatches(thatSearch, rs0d) || itMatches(thatSearch, rs0e) || itMatches(thatSearch, rs0f) || itMatches(thatSearch, rs0g) || itMatches(thatSearch, rs0h) || itMatches(thatSearch, rs0i) || itMatches(thatSearch,rs0j) || itMatches(thatSearch, rs0k) || itMatches(thatSearch, rs0l) || itMatches(thatSearch, rs0m) || itMatches(thatSearch, rs0n) || itMatches(thatSearch, rs0o) || itMatches(thatSearch, rs0p) || itMatches(thatSearch, rs0q) || itMatches(thatSearch, rs0r) || itMatches(thatSearch, rs0s) || itMatches(thatSearch, rs0t) || itMatches(thatSearch, rs0u) || itMatches(thatSearch, rs0v) || itMatches(thatSearch, rs0w) || itMatches(thatSearch, rs0x)) {
                pushResult(entry);
            } else if (itMatches(thatSearch, cutCode[0])) {
                if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedReversedArray[1])) {
                    if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, shifted1)) {
                    pushResult(entry);
                } else if (itMatches(thatSearch, shifted1a)) {
                    pushResult(entry);
                }

            } else if (itMatches(thatSearch, reversedArray[0])) {
                if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, shifted1)) {
                    pushResult(entry);
                } else if (itMatches(thatSearch, shifted1a)) {
                    pushResult(entry);
                }
            } else if (itMatches(thatSearch, permutedArray[0])) {
                if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, shifted1)) {
                    pushResult(entry);
                } else if (itMatches(thatSearch, shifted1a)) {
                    pushResult(entry);
                }
            } else if (itMatches(thatSearch, permutedReversedArray[0])) {
                if (itMatches(thatSearch, permutedReversedArray[1])) {
                    if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, shifted1)) {
                    pushResult(entry);
                } else if (itMatches(thatSearch, shifted1a)) {
                    pushResult(entry);
                }
            } else if (itMatches(thatSearch, cutCode[1])) {
                if (itMatches(thatSearch, cutCode[0])) {
                    if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[0])) {
                    if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedArray[0])) {
                    if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedReversedArray[0])) {
                    if (itMatches(thatSearch, permutedReversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, permutedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, reversedArray[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, cutCode[2])) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2)) {
                        pushResult(entry);
                    } else if (itMatches(thatSearch, shifted2a)) {
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