import React, { useState } from 'react';
import './css/ParagraphGenerator.css';
import FastLine from './graphieros/FastLine';

function ParagraphGenerator() {

    const [paragraphState, setParagraphState] = useState({
        content: <FastLine
            sequence={'ne'}
            colors={[0, 0, 0]}
            size={10}
        />
    });

    let svgToCopy = '';

    const [cypherState, setCypherState] = useState({
        content: <div id="copyMe"></div>
    });

    const handleInput = (data) => {
        const text = data.target.value.toLowerCase();
        // const color = data.target.parentNode.nextSibling.value;
        setParagraphState({
            content: <div id="svg-to-copy">
                <FastLine
                    sequence={text}
                    colors={[0, 0, 0]}
                    size={10}
                />
            </div>
        });

        setTimeout(() => { 
            svgToCopy = document.getElementById("svg-to-copy").innerHTML;
            setCypherState({
                content: <div id="copyMe">{svgToCopy}</div>
            });
        }, 10); //this looks like a hack

    }


    const handleClear = (props) => {
        props.target.parentNode.children[0].value = '';
        setParagraphState({
            content: <FastLine
                sequence={'ne'}
                colors={[0, 0, 0]}
                size={10}
            />
        });

        //okay stick that in another function linked to a show code button
    }

    return (
        <div className='paragraph-generator-body'>
            <div className='paragraph-generator-lines'>
                {paragraphState.content}
            </div>
            <div className='paragraph-generator-controls'>
                <textarea className='paragraph-generator-textarea' onChange={(data) => handleInput(data)} />
                <div className='paragraph-generator-clear' onClick={handleClear}>Clear</div>
                <div className="svg-cypher">
                    {cypherState.content}
                </div>
            </div>

        </div>
    )
}

export default ParagraphGenerator;
