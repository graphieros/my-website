import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Linear from './graphieros/Linear';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import './css/GlyphList.css';
import Fractal from './graphieros/Fractal';
import Card from './Card';

function GlyphList() {

    const glyphCount = graphieros_dictionnary.length;
    let ideograms = 0;
    let pictograms = 0;

    graphieros_dictionnary.forEach(entry => {
        if (entry.type === 'ideo') {
            ideograms += 1;
        } else {
            pictograms += 1;
        }
    });

    const [cardState, setCardState] = useState({
        className: 'hidden',
        content: ''
    });

    const handleCardClose = () => {
        setCardState({
            className: 'hidden'
        });
    }


    const handleCard = (index) => {

        const glyph = graphieros_dictionnary[index];
        const glyphDescription = graphieros_dictionnary[index].description;

        let glyphType = 'pictogramme';

        if (graphieros_dictionnary[index].type === 'ideo') {
            glyphType = 'idéogramme'
        }

        setCardState({
            className: 'card',
            content:
                <Card
                    close={handleCardClose}
                    sequence={glyph.fractal}
                    glyphName={glyph.name}
                    glyphType={glyphType}
                    glyphDescription={glyphDescription}
                />
        });
    }

    return (
        <div className='glyphList-body'>

            <div className='glyphList-title'>
                Liste des glyphes du <span className='span-list-title'> graphieros</span>
            </div>

            <div className='glyphList-list'>

                <p className='glyphList-presentation'>
                    <span className='spanStrong'>{glyphCount}</span> briques fondamentales, réparties en <span className='spanStrong'>{ideograms}</span> idéogrammes et <span className='spanStrong'>{pictograms}</span> pictogrammes, pour représenter tout ce que contient notre Univers.
                </p>

                {graphieros_dictionnary.map((entry, i) => <div className='glyph-block' key={i}>
                    <label className='glyph-list-translation'>{entry.fr}</label>
                    <Linear
                        className='glyph-list-glyph'
                        sequence={entry.name.replace('_', '')}
                        size='50'
                        colors={[29, 55, 104]}
                    />
                    <label className='glyph-list-phono'>{`[ ${entry.name.replace('_', '')} ]`}</label>
                    <div className='capper' value={i} onClick={() => handleCard(i)} />
                </div>)}

            </div>

            <Link to='/'>
                <div className='link-home'>
                    <p>home sweet home</p>
                    <Fractal
                        className='fractal-link-home'
                        sequence='zw-wx-xe-ez-zq-qd-de'
                        svgSize='100'
                        colors={[211, 227, 252]}
                    />
                </div>
            </Link>

            <div className={cardState.className}>
                {cardState.content}
            </div>

        </div>
    )
}

export default GlyphList
