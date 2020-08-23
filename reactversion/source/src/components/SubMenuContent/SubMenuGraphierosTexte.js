import React from 'react';
import SingleGlyph from './EditeurComponents/Linear';
import Molecule from '../Molecule/Molecule';
import graphierosParagraphs from '../../assets/graphierosParagraphs.json';
import './SubMenuGraphierosTexte.css';

const SubMenuGraphierosTexte = () => {

    const paragraphsData = graphierosParagraphs.map(data => {

        let cartouches = [];
        const fullSequence = data.linear.sequence;
        const clearSequence = fullSequence.replace(/\s|\n|\r/g, "-").split("-").filter(el => el !== '');
        // console.log({clearSequence});

        const maxGlyphPerCartouche = 8;
        const glyphCount = clearSequence.length;
        const glyphWords = fullSequence.split(' ');

        let memory = [];
        const cartoucheArray = [];

        // console.log({ glyphCount, maxGlyphPerCartouche });

        if (glyphCount <= maxGlyphPerCartouche) {
            cartoucheArray.push(fullSequence);
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

            console.log({memory});
            cartouches = [...cartoucheArray, ...memory];
            // console.log({cartouches});
        }

        const showCartouches = () => {
            return (
                cartouches.map((cart, i) => <div key={`${cart}${i}`}>
                    <SingleGlyph
                        className="paragraphText"
                        sequence={cart}
                        size={data.linear.size}
                        background={data.linear.background}
                        colors={data.linear.colors}
                        padding={data.linear.padding}
                        cartouche={data.linear.cartouche}
                        border={data.linear.border}
                    />
                </div>
                )
            )
        }

        return (
            <div className="paragraphBlock" key={data.id}>
                <Molecule
                    className="paragraphTitle"
                    sequence={data.molecule.sequence}
                    size={data.molecule.size}
                    colors={data.molecule.colors}
                    borderRadius={data.molecule.borderRadius}
                    background={data.molecule.background}
                    strokeWidth={data.molecule.strokeWidth}
                    border={data.molecule.border}
                />
                {showCartouches()}
            </div>
        )
    })

    return (
        <div>
            {paragraphsData}
        </div>
    )
}

export default SubMenuGraphierosTexte;