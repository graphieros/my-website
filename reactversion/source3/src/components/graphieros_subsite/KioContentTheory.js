import React, { useState } from 'react';
import './css/KioContentTheory.css';
import KioHeader from './KioHeader';
import Fractal from '../graphieros/Fractal';

let t_codeMemory = [];
let t_memory=[];
let t_cutPath=[];

function KioContentTheory(props) {

    let circlePack = [];
    let xInit_odd = 0;
    let xInit_even = 10;
    let yInit = 20;
    let incr = 20;

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_odd + (incr * i);
        let y = yInit;
        if (i > 3 && i < 10) {
            circlePack.push({ x: x, y: y });
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_even + (incr * i);
        let y = yInit + 17;
        if (i > 2 && i < 10) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_odd + (incr * i);
        let y = yInit + (17 * 2);
        if (i > 2 && i < 11) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_even + (incr * i);
        let y = yInit + (17 * 3);
        if (i > 1 && i < 11) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_odd + (incr * i);
        let y = yInit + (17 * 4);
        if (i > 1 && i < 12) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_even + (incr * i);
        let y = yInit + (17 * 5);
        if (i > 0) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_odd + (incr * i);
        let y = yInit + (17 * 6);
        if (i > 1 && i < 12) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_even + (incr * i);
        let y = yInit + (17 * 7);
        if (i > 1 && i < 11) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_odd + (incr * i);
        let y = yInit + (17 * 8);
        if (i > 2 && i < 11) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_even + (incr * i);
        let y = yInit + (17 * 9);
        if (i > 2 && i < 10) {
            circlePack.push({ x: x, y: y })
        }
    }

    for (let i = 0; i < 12; i += 1) {
        let x = xInit_odd + (incr * i);
        let y = yInit + (17 * 10);
        if (i > 3 && i < 10) {
            circlePack.push({ x: x, y: y })
        }
    }

    const handleCoordinates = (props) => {

        const coordinates = [Number(props.target.cx.animVal.valueAsString), Number(props.target.cy.animVal.valueAsString)];
        t_codeMemory.push(coordinates);

        const X = Number(props.target.cx.animVal.valueAsString);
        const Y = Number(props.target.cy.animVal.valueAsString);
        t_memory.push(`${X} ${Y}`);

        let temp = t_memory.flat();
        let tempPath = `M ${temp}`;

        setSvgGroupState({
            content: <g>
                <path className='theory-path' d={tempPath} />
                {t_cutPath.map(path => <path className="theory-path" key={path} d={path} />)}
            </g>
        })
    }


    const handleCut = () => {
        let flat = t_memory.flat();
        t_cutPath.push(`M ${flat}`);
        t_memory = []; 
        t_codeMemory = [];
    }

    const handleEraseAll = () => {
        t_memory=[];
        t_codeMemory=[];
        t_cutPath=[];
        setSvgGroupState({
            content: ''
        })
    }

    const [svgGroupState, setSvgGroupState] = useState({
        content: ''
    });

    return (
        <div className={props.className}>
            <KioHeader sequence='sw-wq-qz-ze-ed-dw-wx qz-ze-ed-dx-xw-wq' />
            <svg className='theory-board' viewBox='0 0 256 210'>
                {circlePack.map((circle, i) => <circle
                    key={`circle_${i}`}
                    className='circles'
                    r='10'
                    cx={circle.x}
                    cy={circle.y}
                    onClick={handleCoordinates}
                />)}
                {svgGroupState.content}
            </svg>
            <div className='eraser-buttons'>
                <button
                    className='memory-eraser'
                    onClick={handleCut}>
                    <Fractal
                        className='theory-fractal-btn'
                        sequence='zw-wx-xe-ez-qd'
                        svgSize='50'
                        colors={[75, 106, 160]}
                    />
                </button>
                <button
                    className='memory-eraser'
                    onClick={handleEraseAll}>
                    <Fractal
                        className='theory-fractal-btn'
                        sequence='ex-dz-zs-sd-qw'
                        svgSize='50'
                        colors={[75, 106, 160]}
                    />
                </button>
            </div>

        </div>
    )
}

export default KioContentTheory;
