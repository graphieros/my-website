import React, { useState } from 'react';
import { graphieros_dictionnary } from '../../libraries/graphieros_dictionnary';
import SingleGlyph from '../SubMenuContent/LexiqueComponents/singleGlyph';
import Fractal from '../Fractal/Fractal';
import './SubMenuLexique.css';

const SubMenuLexique = () => {

    const [listState, setListState] = useState({
        className: 'hidden'
    });

    const [btnShowListState, setBtnShowListState] = useState({
        content: 'afficher tout'
    });

    const [searchResult, setSearchResult] = useState({
        className: 'hidden',
        content: ''
    });

    const [tempResult, setTempResult] = useState({
        content: ''
    });

    const showList = (props) => {

        if (props.target.innerHTML === 'afficher tout') {
            setTimeout(() => {
                setBtnShowListState({
                    content: 'masquer'
                });
            }, 300);

            setListState({
                className: 'glyphList'
            });
        } else {
            setBtnShowListState({
                content: 'afficher tout'
            });
            setListState({
                className: 'hidden'
            });
        }
    }

    let delay = null;

    let insideSearch = (searchValue) => {

        if (searchValue !== '') {

            graphieros_dictionnary.forEach((glyph, i) => {
                console.log(searchValue);
                if (searchValue === glyph.fr) {
                    console.log('match');
                    setSearchResult({
                        className: 'glyphSearchReturn',
                        content: <div><SingleGlyph
                            sequence={glyph.name.replace("_", "")}
                            size='100'
                            colors={[100, 50, 50]}
                            background='white'
                            cartouche={true}
                        />
                            <div className="searchResultPhono">
                                <span>{glyph.fr}</span>
                                <br />
                        [ {glyph.name.replace("_", "")} ]</div>
                        </div>
                    });
                }
            });
        }

        let matches = graphieros_dictionnary.filter(glyph => {
            const regex = new RegExp(`^${searchValue}`, 'gi');
            return glyph.fr.match(regex);
        });

        if (matches.length === 0 || searchValue === '') {
            matches = [];
            setSearchResult({
                className: 'hidden'
            });
        }

        setTempResult({
            content: matches.map((el, i) => {
                return (
                    <div className="results"
                        key={`${el.fr}${i}`}>
                        <p onClick={validateSearch}>{el.fr}</p>
                        <span>
                            <SingleGlyph
                                sequence={el.name.replace("_", "")}
                                size='20'
                                colors={[255, 99, 71]}
                                background='white'
                                cartouche={false}
                                padding=''
                            />
                        </span>
                    </div>
                )
            })
        });
    }

    const searchWord = (props) => {
        const searchValue = props.target.value;

        clearTimeout(delay);

        if (searchValue !== '') {
            delay = setTimeout(() => {
                insideSearch(searchValue);
            }, 250);
        } else {
            insideSearch('');
        }
    }

    const validateSearch = (props) => {

        graphieros_dictionnary.forEach((glyph, i) => {

            if (props.target.innerHTML === glyph.fr) {

                setSearchResult({
                    className: 'glyphSearchReturn',
                    content: <div><SingleGlyph
                        sequence={glyph.name.replace("_", "")}
                        size='100'
                        colors={[100, 50, 50]}
                        background='white'
                        cartouche={true}
                    />
                        <div className="searchResultPhono">
                            <span>{glyph.fr}</span>
                            <br />
                            [ {glyph.name.replace("_", "")} ]</div>
                    </div>
                });
            }
        });
    }

    const letsQuitResult = () => {
        setSearchResult({
            className: 'hidden',
            content: ''
        })
    }


    const glyphArray = [];

    graphieros_dictionnary.sort((a, b) => a.fr.localeCompare(b.fr));

    graphieros_dictionnary.forEach((glyph, i) => {

        glyphArray.push(
            <div className="glyphBox" key={`glyph${i}`}>
                <SingleGlyph
                    sequence={glyph.name.replace("_", "")}
                    size='50'
                    colors={[100, 50, 50]}
                    background='white'
                    cartouche={true}
                    padding=''
                />
                <p className="glyphPhonology">
                    [ {glyph.name.replace("_", "")} ]
                </p>
                <p className="glyphFrench">
                    {glyph.fr}
                </p>
            </div>
        );

    });


    return (
        <div>
            <div className='inputWrapper'>
                <label
                    className="labelWordSearch">
                    chercher un mot :
                </label>
                <br />
                <input
                    className='inputSearchGlyphByName'
                    onChange={searchWord}
                    autoFocus
                    onFocus={e => e.currentTarget.select()}
                />
            </div>

            <div className="tempSearch">
                {tempResult.content}
            </div>

            <button
                className="btnShowList"
                onClick={showList}>
                {btnShowListState.content}
            </button>

            <div className={searchResult.className}>
                {searchResult.content}
                <div
                    className="quitResult"
                    onClick={letsQuitResult}>
                    <Fractal
                        sequence='zx-we'
                        colors={[255, 255, 255]}
                        svgSize={40}
                        background='rgb(255,91,79)'
                    />
                </div>
            </div>

            <div
                className={listState.className}>
                {glyphArray}
            </div>

        </div>
    )
}

export default SubMenuLexique;