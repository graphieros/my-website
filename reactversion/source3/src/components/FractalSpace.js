import React, { useState } from 'react';
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

let intensity = 1.1;
let fractalCount = 0;

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
        intensity = 1.1;
        fractalCount = 0;
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
                    intensity={intensity}
                />
            });
            size *= 1.25;
            fractalCount += 1;
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
                intensity={intensity}
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
                intensity={intensity}
            />
        });
    }

    const handleMoreLight = () => {
        intensity *= 1.01;
        setSpaceState({
            content: <Fractal
                className='fractalspace-output'
                style={style}
                sequence={memory}
                svgSize={size}
                colors={[75, 106, 160]}
                light={true}
                intensity={intensity}
            />
        });
    }

    const handleLessLight = () => {
        intensity *= 0.99;
        setSpaceState({
            content: <Fractal
                className='fractalspace-output'
                style={style}
                sequence={memory}
                svgSize={size}
                colors={[75, 106, 160]}
                light={true}
                intensity={intensity}
            />
        });
    }

    return (
        <div className='fractalspace-body'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

            <Link className='fractalspace-link' to='/'>
                <Fractal
                    className='fractalspace-homelink'
                    sequence='zw-wd-dz-qs-se-xs'
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

                <input
                    type='text'
                    autoFocus
                    onKeyPress={handleSpace} />
                <br />
                <div className='intensity-count'>light: {intensity}</div>
                <div className='fractal-count'>depth: {fractalCount}</div>
            </div>
            <div className='fractalspace-scene'>
                {spaceState.content}
            </div>

            <div className='fractalspace-navigation'>

                <div onClick={handleMoreLight}>
                    <Fractal
                        className='fractalspace-button-light'
                        sequence='zw-qs zw-wd-dz-qs-se-sx'
                        colors={[80, 80, 80]}
                        svgSize='50'
                    />
                </div>

                <div onClick={handlePlus}>
                    <Fractal
                        className='fractalspace-button'
                        sequence='zw-qs'
                        colors={[80, 80, 80]}
                        svgSize='50'
                    />
                </div>
                <div onClick={handleMinus}>
                    <Fractal
                        className='fractalspace-button'
                        sequence='qs'
                        colors={[80, 80, 80]}
                        svgSize='50'
                    />
                </div>

                <div onClick={handleLessLight}>
                    <Fractal
                        className='fractalspace-button-light'
                        sequence='qs zw-wd-dz-qs-se-sx'
                        colors={[80, 80, 80]}
                        svgSize='50'
                    />
                </div>
            </div>
        </div>
    )
}

export default FractalSpace;
