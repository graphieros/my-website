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

        console.log(data.linear.max)

        const maxGlyphPerCartouche = data.linear.max;
        const glyphCount = clearSequence.length;
        const glyphWords = fullSequence.split(' ');

        let memory = [];
        const cartoucheArray = [];

        if (glyphCount <= maxGlyphPerCartouche) {
            cartoucheArray.push(fullSequence);
        } else {
            glyphWords.forEach(word => {

                if (['', ' '].includes(word)) {
                    return;
                }

                let glyphNumberPerWord = word.split("-").length;

                if (glyphNumberPerWord + memory.length > maxGlyphPerCartouche) {
                    cartoucheArray.push(memory.join(" "));
                    memory = [];
                }

                memory.push(word);

            });

            cartouches = [...cartoucheArray, ...memory];

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
                <div className="allParagraphsWrapper">
                    {showCartouches()}
                </div>

            </div>
        )
    })

    return (
        <div>
            <div className="graphierosTextPresentation">
                <h1 className="graphierosTextPresentationTitle">Textes</h1>
                <p>Une collection de textes rédigés en graphieros. Le lecteur est invité à tenter d'en décrypter le sens.</p>
            </div>
            {paragraphsData}
        </div>
    )
}

export default SubMenuGraphierosTexte;