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

    const [inputColor, setInputColor] = useState({
        style: {
            color: 'greenyellow'
        }
    });

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

            setInputColor({
                style: {
                    color: 'greenyellow'
                }
            });

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

            setInputColor({
                style: {
                    color: 'rgb(255,255,255)'
                }
            });

            setTerminalState({
                className: 'graphieros-terminal',
                content: molecularInput.map((mol, i) => <Molecule
                    className='molecule-output'
                    key={`mol_${i}`}
                    sequence={mol.replaceAll("-", " ")}
                    colors={[255,255,255]}
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

            setInputColor({
                style: {
                    color: 'rgb(122,161,216)'
                }
            });

            //that's a really bigO useEffect?

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

                    });
                });
                finalStack.push(convertedStack.toString().replaceAll(',', ' '));
            });

            setTerminalState({
                className: 'graphieros-terminal',
                content: finalStack.map((sta, i) => <Fractal
                    className='fractal-output'
                    key={`fra_${i}`}
                    sequence={`ss-${sta}`}
                    colors={[75, 106, 160]}
                    svgSize='150'
                    light={true}
                    intensity='1.3'
                    size='30'
                    dropShadow='0px 0px 3px rgba(255,255,255,0.6)'
                />)
            });
        }
    }

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
        document.getElementById("kcuf").focus();
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
        <>
        <div className={props.className}>
            {props.children}

            <div className={buttonState.className}>
                <button onClick={handleEditorMode} className='toggle-graphieros-mode btn-linear'>
                    linéaire
                </button>
                <button onClick={handleEditorMode} className='toggle-graphieros-mode btn-molecular'>
                    moléculaire
                </button>
                <button onClick={handleEditorMode} className='toggle-graphieros-mode btn-fractal'>
                    fractal
                </button>
            </div>

            <textarea
                id="kcuf"
                autoFocus
                placeholder='...'
                style={inputColor.style}
                onChange={activateTerminal}
                onFocus={activateTerminal}
            />
            <div className={terminalState.className}>
                {terminalState.content}
            </div>

        </div>
        <div className={closeBtnState.className} onClick={handleCloseTerminal}>
                <Fractal
                    onClick={handleCloseTerminal}
                    className='fractal-close-terminal'
                    sequence='zx-we'
                    colors={[255, 255, 255]}
                    svgSize='32'
                />
            </div>
        </>
    )
}

export default GraphierosEditor;
