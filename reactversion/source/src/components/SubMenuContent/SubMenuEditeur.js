import React, { useState } from 'react';
import './SubMenuEditeur.css';
import LineGlyph from './EditeurComponents/Linear';


const SubMenuEditeur = () => {

    const [sequenceState, setSequenceState] = useState({
        sequence: 'keo-kadwa , kio-tew-ma !',
        size: 50
    });

    const cliHeight = window.innerHeight - 380;
    const glyphSize = 30;
    const maxGlyphPerCartouche = Math.floor(cliHeight / glyphSize);

    const valueHandler = (props) => {

        const fullSequence = props.target.value;
        const clearSequence = fullSequence.replace(/\s|\n|\r/g, "-").split("-").filter(el => el !== '');
        // console.log({clearSequence});

        const glyphCount = clearSequence.length;
        const glyphWords = fullSequence.split(' ');

        const cartoucheArray = [];
        let temporaryCartouche = [];

        console.log({glyphCount, maxGlyphPerCartouche});

        if (glyphCount <= maxGlyphPerCartouche) {
            cartoucheArray.push(clearSequence.join(' '));
        } else {
            glyphWords.forEach(word => {

                if (['', ' '].includes(word)) {
                    return;
                }

                let glyphNum = word.split("-").length;

                // console.log(glyphNum, temporaryCartouche.length);

                if (glyphNum + temporaryCartouche.length > maxGlyphPerCartouche) {
                    
                    cartoucheArray.push(temporaryCartouche.join(" "));
                    temporaryCartouche = [];
                }

                temporaryCartouche.push(word);
            });
        }

        console.log({cartoucheArray, temporaryCartouche});

        setSequenceState({
            sequence: props.target.value,
            size: props.size
        });
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
                className="glyphLine"
                sequence={sequenceState.sequence}
                size={sequenceState.size}
                colors={[100, 50, 50]}
                background="radial-gradient(at top, white, tomato)"
                cartouche={true}
                border='1px solid tomato'
                padding=''
                boxShadow='0 20px 40px -12px rgba(100,0,0,.35)'
            />
            <div className="backgroundFiddle"></div>
        </div>
    )
}

export default SubMenuEditeur;