import React, { useState } from 'react';
import './css/LeLivre.css';
import './css/FractalSpace.css';
import LeLivrePages from '../libraries/LeLivrePages.json';
import FastLine from './graphieros/FastLine';
import Fractal from './graphieros/Fractal';

let index = 0;

const LeLivre = () => {

    const [pageState, setPageState] = useState({
        pageIndex: index,
        pageNum: index
    });

    const handleNext = () => {
        if (index >= LeLivrePages.length - 1) {
            index = 0;
            setPageState({
                pageIndex: index,
                pageNum: index
            });
        } else {
            index += 1;
            setPageState({
                pageIndex: index,
                pageNum: index
            });
        }
    }

    const handlePrevious = () => {
        if (pageState.pageIndex === 0) {
            index = 0;
            setPageState({
                pageIndex: index,
                pageNum:index
            });
        } else {
            index -= 1;
            setPageState({
                pageIndex: index,
                pageNum:index
            });
        }
    }

    return (
        <div className='LeLivre-body'>
            <div className="LeLivre-page">
                <FastLine
                    sequence={LeLivrePages[pageState.pageIndex].text}
                    size={1}
                    colors={[255, 255, 255]}
                />
                <p className='LeLivre-page-number'>{pageState.pageNum}</p>
            </div>
            <div className="LeLivre-page-previous" onClick={handlePrevious}>
                <Fractal
                    sequence='zq-qw-qd'
                    svgSize='40'
                    colors={[255, 255, 255]}
                />
            </div>
            <div className="LeLivre-page-next" onClick={handleNext}>
                <Fractal
                    sequence='ed-dx-qd'
                    svgSize='40'
                    colors={[255, 255, 255]}
                />
            </div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className="hea-star">
                <Fractal
                    sequence='zw-wd-dz-qs-se-xs zw-wd-dz-qs-se-xs zw-wd-dz-qs-se-xs zw-wd-dz-qs-se-xs'
                    svgSize='40'
                    colors={[255, 197, 153]} 
                    light={true}
                />
            </div>
        </div>
    )
}

export default LeLivre;
