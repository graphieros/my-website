import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Linear from './graphieros/Linear';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import './css/GlyphList.css';
import Fractal from './graphieros/Fractal';

function GlyphList() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const glyphCount = graphieros_dictionnary.length;

    return (
        <div className='glyphList-body'>
            <div className='glyphList-title'>
                Liste des glyphes du <span className='span-list-title'> graphieros</span>
            </div>
            <div className='glyphList-list'>
                <p className='glyphList-presentation'>
                    <strong>{glyphCount}</strong> briques fondamentales, pour représenter tout ce que contient notre univers
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
                </div>)}
            </div>
            <Link to='/'>
                <div className='link-home'>
                    <p>home sweet home</p>
                    <Fractal 
                        className='fractal-link-home'
                        sequence='zw-wx-xe-ez-zq-qd-de'
                        svgSize='100'
                        colors={[211,227,252]}
                    />
                </div>
            </Link>
        </div>
    )
}

export default GlyphList
