import React, { useState } from 'react';
import './css/GraphierosEditor.css';
import Linear from './graphieros/Linear';
import Fractal from './graphieros/Fractal';
import Molecule from './graphieros/Molecule';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';

let initValue;

function GraphierosEditor(props) {

    const [terminalState, setTerminalState] = useState({
        className: 'hidden',
    });

    const [closeBtnState, setCloseBtnState] = useState({
        className: 'hidden'
    });

    const [buttonState, setButtonState] = useState({
        className: 'hidden'
    });

    const handleEditorMode = (props) => {
        let buttonValue = props.target.innerText;
        if (buttonValue === 'linéaire') {
            initValue = 0;
        } else if (buttonValue === 'moléculaire') {
            initValue = 1;
        } else if (buttonValue === 'fractal') {
            initValue = 2;
        } else {
            initValue = 0;
        }
    }



    const activateTerminal = (props) => {

        let codeInput = props.target.value.toLowerCase();

        setCloseBtnState({
            className: 'terminal-close-button'
        });

        setButtonState({
            className: 'mode-toggles'
        });

        if (initValue === undefined) {
            initValue = 0;
        }

        //linear mode

        if (initValue === 0) {
            setTerminalState({
                className: 'graphieros-terminal',
                content: <>
                    <Linear
                        className='linear-output'
                        sequence={codeInput}
                        colors={[173, 255, 47]}
                        size='30'
                    />
                </>
            });
        }

        //molecular mode

        if (initValue === 1) {
            let molecularInput = codeInput.split(' ');
            setTerminalState({
                className: 'graphieros-terminal',
                content: molecularInput.map((mol, i) => <Molecule
                    className='molecule-output'
                    key={`mol_${i}`}
                    sequence={mol.replaceAll("-", " ")}
                    colors={[173, 255, 47]}
                    size='100'
                    strokeWidth='6'
                />)
            });
        }

        //fractal mode

        if (initValue === 2) {
            let fractalInput = codeInput.split(' ');

            let stack = [];
            let convertedStack = [];
            let finalStack = [];

            fractalInput.forEach(fi => {
                stack = [];
                convertedStack = [];
                stack.push(fi.replaceAll("-", " "));
                stack.forEach(el => {
                    let words = el.split(' ');
                    words.forEach(word => {
                        graphieros_dictionnary.forEach(entry => {
                            if (entry.name.replace('_', '') === word) {
                                convertedStack.push(entry.fractal);
                            }
                        });

                    })
                });
                finalStack.push(convertedStack.toString().replaceAll(',', ' '));
            });

            setTerminalState({
                className: 'graphieros-terminal',
                content: finalStack.map((sta, i) => <Fractal
                    className='fractal-output'
                    key={`fra_${i}`}
                    sequence={`ss-${sta}`}
                    colors={[173, 255, 47]}
                    svgSize='200'
                    light={false}
                    intensity='1.6'
                />)
            });
        }

    }

    const handleCloseTerminal = () => {
        setTerminalState({
            className: 'hidden'
        });
        setCloseBtnState({
            className: 'hidden'
        });
        setButtonState({
            className: 'hidden'
        });
    }

    return (
        <div className={props.className}>
            {props.children}

            <div className={buttonState.className}>
                <button onClick={handleEditorMode} className='toggle-graphieros-mode'>
                    linéaire
                </button>
                <button onClick={handleEditorMode} className='toggle-graphieros-mode'>
                    moléculaire
                </button>
                <button onClick={handleEditorMode} className='toggle-graphieros-mode'>
                    fractal
                </button>
            </div>

            <textarea
                placeholder='...'
                onChange={activateTerminal}
            />
            <div className={terminalState.className}>

                {terminalState.content}
            </div>

            <div className={closeBtnState.className} onClick={handleCloseTerminal}>
                <Fractal
                    className='fractal-close-terminal'
                    sequence='zx-we'
                    colors={[173, 255, 47]}
                    svgSize='32'
                />
            </div>

        </div>
    )
}

export default GraphierosEditor;
