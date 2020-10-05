import React, { useState } from 'react';
import './css/GraphierosEditor.css';
import Linear from './graphieros/Linear';
import Fractal from './graphieros/Fractal';

function GraphierosEditor(props) {

    const [terminalState, setTerminalState] = useState({
        className: 'hidden'
    });

    const [closeBtnState, setCloseBtnState] = useState({
        className: 'hidden'
    });

    const activateTerminal = (props) => {
        setCloseBtnState({
            className: 'terminal-close-button'
        });
        let codeInput = props.target.value.toLowerCase();
 

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

    const handleCloseTerminal = () => {
        setTerminalState({
            className: 'hidden'
        });
        setCloseBtnState({
            className: 'hidden'
        });
    }

    return (
        <div className={props.className}>
            {props.children}
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
