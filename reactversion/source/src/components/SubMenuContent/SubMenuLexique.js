import React from 'react';
import { graphieros_dictionnary } from '../../libraries/graphieros_dictionnary';
import SingleGlyph from '../SubMenuContent/LexiqueComponents/singleGlyph';
import './SubMenuLexique.css';

const SubMenuLexique = () => {

    let glyphArray = [];

    for(let i = 0; i < graphieros_dictionnary.length; i += 1) {
        glyphArray.push(
            <SingleGlyph
                key = {i}
                sequence={graphieros_dictionnary[i].name.replace("_","")}
                size='50'
                colors={[100, 50, 50]}
            />
        )
    }

    return (
        <div>
            <div className='glyphList'>{glyphArray} </div>
        </div>
    )
}

export default SubMenuLexique;