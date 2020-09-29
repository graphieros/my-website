import React, { useEffect } from 'react';
import './css/Words.css';
import { linearToFractal } from '../libraries/linearToFractal';
import graphieros_translation from '../libraries/graphieros_translation.json';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import Linear from './graphieros/Linear';
import Molecule from './graphieros/Molecule';
import Fractal from './graphieros/Fractal';

function Words() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });



    return (
        <div className='words-body'>
            <div className='words-title'>Liste des mots composés</div>
            <div className='words-presentation-paragraph'>
                Retrouvez ci-dessous la liste non exhaustive des mots composés présents actuellement dans le dictionnaire, présentés de gauche à droite en modes linéaire, moléculaire et fractal.
            </div>
            <div className='words-list'>
                {graphieros_translation.map((entry, i) => {
                    return (
                        <div key={`word_${i}`} className='words-presentation'>
                            <p className='word-fr'>{entry.fr}</p>
                            <Linear 
                                className='words-linear'
                                sequence={entry.line}
                                colors={[75,106,160]}
                            />
                            <Molecule 
                                className='words-molecule'
                                sequence={entry.molecule}
                                colors={[75,106,160]}
                                size='100'
                            />
                            <Fractal
                                className='words-fractal'
                                sequence={linearToFractal(entry.molecule, graphieros_dictionnary)}
                                colors={[122,161,216]}
                                light={false}
                            />
                            <p className='words-phono'>{`[ ${entry.phono} ]`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Words;
