import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/FractalSpace.css';
import Fractal from './graphieros/Fractal';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';

let memory = 'ss';
let size = 390;

let style = {
    height: `${size}px`,
    width: `${size}px`
}

function FractalSpace() {

    const [spaceState, setSpaceState] = useState({
        content: ''
    });

    const handleReset = () => {
        setSpaceState({
            content: ''
        });
        memory = '';
        size = 390;
    }


    const handleSpace = (props) => {

        let stack = "ss-";

        props.persist();

        let userText = props.target.value.toLowerCase();

        if (props.key === 'Enter') {
            graphieros_dictionnary.forEach(entry => {
                if (entry.name.replace('_', '') === userText) {
                    stack += `${entry.fractal}`;
                }
            });
            props.target.value = '';
            memory += `${stack} `;
            setSpaceState({
                content: <Fractal
                    className='fractalspace-output'
                    style={style}
                    sequence={memory}
                    svgSize={size}
                    colors={[75, 106, 160]}
                    light={true}
                    intensity='1.1'
                />
            });
            size *= 1.25;
        }
    }

    const handlePlus = () => {
        size *= 1.2;
        setSpaceState({
            content: <Fractal
                className='fractalspace-output'
                style={style}
                sequence={memory}
                svgSize={size}
                colors={[75, 106, 160]}
                light={true}
                intensity='1.1'
            />
        });
    }

    const handleMinus = () => {
        size /= 1.2;
        setSpaceState({
            content: <Fractal
                className='fractalspace-output'
                style={style}
                sequence={memory}
                svgSize={size}
                colors={[75, 106, 160]}
                light={true}
                intensity='1.1'
            />
        });
    }

    return (
        <div className='fractalspace-body'>

            <Link className='fractalspace-link' to='/'>
                <Fractal
                    className='fractalspace-homelink'
                    sequence='qz-zw-wq-xe-es-sx-dq zw-wx-xe-ez-zq-qd-de'
                    svgSize='80'
                    colors={[75, 106, 160]}
                    light={true}
                    intensity='1.6'
                />
            </Link>

            <div className='fractalspace-textinput'>
                <div onClick={handleReset}>
                    <Fractal
                        className='fractalspace-label'
                        sequence='dq-zs-sw ze-qs-wx'
                        svgSize='50'
                        colors={[80, 80, 80]}
                        light={true}
                        intensity='2'
                    />
                </div>

                <input type='text' autoFocus onKeyPress={handleSpace}></input>
            </div>
            <div className='fractalspace-scene'>
                {spaceState.content}
            </div>
            <div className='fractalspace-navigation'>
                <div onClick={handlePlus}>
                    <Fractal
                        className='fractalspace-button'
                        sequence='zw-qs'
                        colors={[80,80,80]}
                        svgSize='50'
                    />
                </div>
                <div onClick={handleMinus}>
                    <Fractal
                        className='fractalspace-button'
                        sequence='qs'
                        colors={[80,80,80]}
                        svgSize='50'
                    />
                </div>
            </div>
        </div>
    )
}

export default FractalSpace;
