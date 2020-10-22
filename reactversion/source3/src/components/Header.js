import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import Fractal from './graphieros/Fractal';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';
import GraphierosShapeFinder from './GraphierosShapeFInder';
import ShapeSearcher2 from './ShapeSearcher2';
import GraphierosEditor from './GraphierosEditor';
import FlatFractal from './graphieros/FlatFractal';

function Header() {

    const [shapeSearchState, setShapeSearchState] = useState({
        className: 'hidden'
    });

    const [shapeSearch2State, setShapeSearch2State] = useState({
        className: 'hidden'
    });

    const [buttonSeachState, setButtonSeachState] = useState({
        className: 'button-search-shape'
    });

    const [backState, setBackState] = useState({
        className: 'hidden'
    });

    const [editorState, setEditorState] = useState({
        className: 'reduce'
    });

    const [btnEditor, setBtnEditor] = useState({
        className: 'hidden'
    });

    const [searchOptionsState, setSearchOptionsState] = useState({
        className: 'hidden'
    });

    const handleShowShapeSearch = () => {
        setButtonSeachState({
            className: 'hidden'
        });
        setBackState({
            className: 'backState'
        });
        setSearchOptionsState({
            className: 'search-choice'
        })
    }

    const handleCloseSearch = () => {
        setButtonSeachState({
            className: 'button-search-shape'
        });
        setShapeSearchState({
            className: 'hidden'
        });
        setShapeSearch2State({
            className: 'hidden'
        });
        setBackState({
            className: 'hidden'
        });
        setSearchOptionsState({
            className: 'hidden'
        });
    }

    const handleDrawSearch = () => {
        setShapeSearchState({
            className: ''
        });
        setSearchOptionsState({
            className: 'hidden'
        });
    }

    const handleClickSearch = () => {
        setShapeSearch2State({
            className: 'searchBigBody'
        });
        setSearchOptionsState({
            className: 'hidden'
        });
    }

    const handleShowEditor = () => {
        setEditorState({
            className: 'graphierosEditor-init'
        });
        setBtnEditor({
            className: 'btn-hide-editor'
        });
    }

    const handleHideEditor = () => {
        setEditorState({
            className: 'reduce'
        });
        setBtnEditor({
            className: 'hidden'
        });
    }

    return (
        <>
            <div className='header'>
                <Link className='link' to='/'>
                    <Logo
                        className='logo-fractal'
                        fontSize='1.618em'
                        color='rgb(75,106,160)'
                        svgSize='50'
                        colors={[75, 106, 160]}
                    />
                </Link>

                <Menu />
                <div className='sub-header'>

                    <SearchBar className='searchBar' />

                    <button
                        className={buttonSeachState.className}
                        onClick={handleShowShapeSearch}>
                        ... ou une forme
                    </button>

                    <div className={searchOptionsState.className}>
                        <button onClick={handleDrawSearch}>
                            <FlatFractal onClick={handleDrawSearch}
                                className='flatfrac-opt'
                                sequence='dq-zs-ws'
                                colors={[29,55,104]}
                                size='30'
                                svgSize='30'
                            />
                            dessiner la forme
                        </button>
                        <button onClick={handleClickSearch}>
                            trouver la forme
                            <FlatFractal onClick={handleClickSearch}
                                className='flatfrac-opt'
                                sequence='qz-ed-xw wq-qz-ze-ed-dx-xw'
                                colors={[29,55,104]}
                                size='30'
                                svgSize='30'
                            />
                        </button>
                    </div>

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

                    <ShapeSearcher2 className={shapeSearch2State.className}>
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
                    </ShapeSearcher2>

                </div>
                <div className={backState.className} />

            </div>

            <div onClick={handleShowEditor}>
                <GraphierosEditor className={editorState.className} />
            </div>
            <div className={btnEditor.className} onClick={handleHideEditor}>
                <Fractal
                    className='fractal-reduce'
                    sequence='zq-qw-es-sx'
                    svgSize='61.8'
                    colors={[173, 255, 47]}
                />
            </div>

        </>
    )
}

export default Header
