import React, { useState } from 'react';
import './css/ParagraphGenerator.css';
import FastLine from './graphieros/FastLine';

function ParagraphGenerator() {

    const [paragraphState, setParagraphState] = useState({
        content: <FastLine
        sequence={''}
        colors={[0,0,0]}
        size={10}
    />
    });

    // const hexToRgb = hex =>
    //     hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    //         , (m, r, g, b) => '#' + r + r + g + g + b + b)
    //         .substring(1).match(/.{2}/g)
    //         .map(x => parseInt(x, 16))

    const handleInput = (data) => {
        const text = data.target.value;
        // const color = data.target.parentNode.nextSibling.value;
        setParagraphState({
            content: <FastLine
                sequence={text}
                colors={[0,0,0]}
                size={10}
            />
        });
    }

    const handleClear = (props) => {
        props.target.parentNode.children[0].value = '';
        setParagraphState({
            content: <FastLine
            sequence={''}
            colors={[0,0,0]}
            size={10}
        />
        });
    }

    return (
        <div className='paragraph-generator-body'>
            <div className='paragraph-generator-lines'>
                {paragraphState.content}
            </div>
            <div className='paragraph-generator-controls'>
                <textarea className='paragraph-generator-textarea' onChange={(data) => handleInput(data)} />
                <div className='paragraph-generator-clear' onClick={handleClear}>Clear</div>
            </div>
            {/* <input className='paragraph-generator-color' type="color"/> */}

        </div>
    )
}

export default ParagraphGenerator;
