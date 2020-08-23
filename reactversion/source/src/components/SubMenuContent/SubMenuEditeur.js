import React, { useState } from 'react';
import './SubMenuEditeur.css';
import LineGlyph from './EditeurComponents/Linear';

let cartouches = [];

const SubMenuEditeur = () => {

    const [sequenceState, setSequenceState] = useState({
        sequence: 'keo-kadwa , kio-tew-ma !',
        size: 50
    });

    let cliHeight = window.innerHeight - 380;
    if(cliHeight > 200){
        cliHeight = 200;
    }
    const glyphSize = 30;
    const maxGlyphPerCartouche = Math.floor(cliHeight / glyphSize);

    const valueHandler = (props) => {

        const fullSequence = props.target.value;
        const clearSequence = fullSequence.replace(/\s|\n|\r/g, "-").split("-").filter(el => el !== '');
        // console.log({clearSequence});

        const glyphCount = clearSequence.length;
        const glyphWords = fullSequence.split(' ');


        let memory = [];
        const cartoucheArray = [];

        // console.log({ glyphCount, maxGlyphPerCartouche });

        if (glyphCount <= maxGlyphPerCartouche) {
            cartoucheArray.push(fullSequence);
            console.table({cartoucheArray});
        } else {
            glyphWords.forEach(word => {

                if (['', ' '].includes(word)) {
                    return;
                }

                let glyphNumberPerWord = word.split("-").length;

                // console.log({glyphNumberPerWord, memory});

                if (glyphNumberPerWord + memory.length > maxGlyphPerCartouche) {
                    cartoucheArray.push(memory.join(" "));
                    memory = [];
                }

                memory.push(word);
        
            });

            // console.log({memory});
            cartouches = [...cartoucheArray, ...memory];
            // console.log({cartouches});
        }

        setSequenceState({
            sequence: props.target.value,
            size: props.size
        });
    }

    const showCartouches = () => {
        return (
            cartouches.map((cart, i) => <div key={`${cart}${i}`}>
                <LineGlyph
                    className="glyphLine"
                    sequence={cart}
                    size='50'
                    colors={[100, 50, 50]}
                    background="radial-gradient(at top, white, tomato)"
                    cartouche={true}
                    border='1px solid tomato'
                    padding=''
                    boxShadow='0 20px 40px -12px rgba(100,0,0,.35)'
                />
            </div>
            )
        )
    }

    return (
        <div>
            <div className="editeurControl">
                <h1>Editeur</h1>
                <p>Saisissez des glyphes par leur phonologie<br /><span>Les glyphes d'un même mot sont reliés par un " - "</span></p>
                <textarea
                    defaultValue='keo-kadwa , kio-tew-ma !'
                    type="text"
                    id="editeurInput"
                    autoFocus
                    onFocus={e => e.currentTarget.select()}
                    onChange={valueHandler}
                />

            </div>

            <LineGlyph
                className="glyphLineCurrent"
                sequence={sequenceState.sequence}
                size='30'
                colors={[255,255,255]}
                background=''
                cartouche={false}
                border=''
                padding=''
                boxShadow=''
            />

            <div className="cartoucheGrid">
                {showCartouches()}
            </div>
            

            <div className="backgroundFiddle"></div>
        </div>
    )
}

export default SubMenuEditeur;