import React from 'react';
import './css/Paragraphs.css';
import ParagraphGenerator from './ParagraphGenerator';

function Paragraphs() {
    return (
        <div className='paragraphs-body'>
            <p className='paragraph-generator-title'>
                Graphieros
            </p>
            <ParagraphGenerator />
        </div>
    )
}

export default Paragraphs;
