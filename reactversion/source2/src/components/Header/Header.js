import React, { useState } from 'react';
import Menu from './Menu/Menu';
import SearchBar from './SearchBar/SearchBar';
import GraphierosShapeFinder from '../GraphierosShapeFInder';
import Fractal from '../graphieros/Fractal';
import './Header.css';

const Header = (props) => {

    const [finderState, setFinderState] = useState({
        className: 'hidden'
    });

    const [tempBackState, setTempBackState] = useState({
        className: 'hidden'
    });

    const handleOpenFinder = () => {
        setFinderState({
            className: 'visible'
        });
        setTempBackState({
            className: 'backState'
        });
    }

    const handleCloseGlyphSearch = () => {
        setFinderState({
            className: 'hidden'
        });
        setTempBackState({
            className: 'hidden'
        });
    }

    return (
        <div className={props.className}>
            <div className="siteTitle">
                <div>
                    <span>A</span>lec <span>L</span>loyd <span>P</span>robert
                </div>
            </div>

            <SearchBar className="searchBar" />
            <Menu 
            className="mainMenu"
            />

            <div className='graphierosMenu'>
                <button
                    className='btnSearchShape'
                    onClick={handleOpenFinder}>
                    Quel est ce glyphe?
                </button>
            </div>

            <GraphierosShapeFinder className={finderState.className}>

                <div onClick={handleCloseGlyphSearch}>
                    <Fractal
                        className='quitGlyphSearch'
                        sequence='zx-we'
                        colors={[255, 255, 255]}
                        svgSize={30}
                        background='rgb(255,91,79)'
                        backgroundRadius='100%'
                    />
                </div>

            </GraphierosShapeFinder>
            <div className={tempBackState.className}></div>
        </div>
    )
}

export default React.memo(Header);