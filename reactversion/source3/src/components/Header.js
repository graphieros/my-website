import React, { useState } from 'react';
import './css/Header.css';
import Fractal from './graphieros/Fractal';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';
import GraphierosShapeFinder from './GraphierosShapeFInder';

function Header() {

    const [shapeSearchState, setShapeSearchState] = useState({
        className: 'hidden'
    });

    const [buttonSeachState, setButtonSeachState] = useState({
        className: 'button-search-shape'
    });

    const handleShowShapeSearch = () => {
        setShapeSearchState({
            className: ''
        });
        setButtonSeachState({
            className: 'hidden'
        });
    }

    const handleCloseSearch = () => {
        setButtonSeachState({
            className: 'button-search-shape'
        });
        setShapeSearchState({
            className: 'hidden'
        });
    }

    return (
        <div className='header'>
            <Logo
                className='logo-fractal'
                fontSize='1.618em'
                color='rgb(75,106,160)'
                svgSize='50'
                colors={[75, 106, 160]}
            />
            <Menu />
            <div className='sub-header'>
                <SearchBar className='searchBar' />
                <button
                    className={buttonSeachState.className}
                    onClick={handleShowShapeSearch}>
                    ... ou une forme
                </button>

                <GraphierosShapeFinder className={shapeSearchState.className}>
                    <div onClick={handleCloseSearch}>
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
            </div>

        </div>
    )
}

export default Header
