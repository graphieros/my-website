import React, { useState, useEffect } from 'react';
import './css/Words.css';
import graphieros_translation from '../libraries/graphieros_translation.json';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import Linear from './graphieros/Linear';
import Molecule from './graphieros/Molecule';
import Fractal from './graphieros/Fractal';

function Words() {

    const wordCount = graphieros_translation.length;

    const [wordState, setWordState] = useState({
        content:''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        setWordState({
            content: graphieros_translation.map((entry, i) => {
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
                            sequence={linearToFractal(entry.molecule)}
                            colors={[122,161,216]}
                            light={false}
                        />
                        <p className='words-phono'>{`[ ${entry.phono} ]`}</p>
                    </div>
                )
            })
        })
    }, []);

    function linearToFractal(mol){
        let linearCode = [];
        let convertedCode = [];
        let fractalCode = [];
    
        linearCode = mol.split(' ');
        linearCode.forEach(code => {
            convertedCode.push(`_${code}`)
        });
        
        convertedCode.forEach(code => {
            graphieros_dictionnary.forEach(word => {
                if(word.name === code) {
                    fractalCode.push(word.fractal)
                }
            });
        });
    
        return fractalCode.toString().replaceAll(',', ' ');
    }


    return (
        <div className='words-body'>
            <div className='words-title'>Liste des <span className="title-word-count-span">{wordCount}</span> mots composés</div>
            <div className='words-presentation-paragraph'>
    Retrouvez ci-dessous la liste non exhaustive des <span className="word-count-span">{wordCount}</span> mots composés présents actuellement dans le dictionnaire, présentés de gauche à droite en modes linéaire, moléculaire et fractal.
            </div>
            <div className='words-list'>
                {wordState.content}
            </div>
        </div>
    )
}

export default Words;
