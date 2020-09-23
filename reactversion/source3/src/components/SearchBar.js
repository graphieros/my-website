import React, { useState } from 'react';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import graphieros_translation from '../libraries/graphieros_translation.json';
import Linear from './graphieros/Linear';
import Fractal from './graphieros/Fractal';
import Molecule from './graphieros/Molecule';
import './css/SearchBar.css';

const SearchBar = (props) => {

    const wordList = graphieros_translation;

    const wordCount = wordList.length;
    const glyphCount = graphieros_dictionnary.length;

    const [searchResult, setSearchResult] = useState({
        className: 'hidden',
        content: ''
    });

    const [tempResult, setTempResult] = useState({
        content: ''
    });

    const [tempResultWord, setTempResultWord] = useState({
        content: ''
    });

    const [tempSearchState, setTempSearchState] = useState({
        className: 'hidden'
    });

    const [backState, setBackState] = useState({
        className: 'hidden'
    });
    

    let delay = null;

    let insideSearch = (searchValue) => {

        if (searchValue !== '') {

            setTempSearchState({
                className: 'tempSearch'
            });

            graphieros_dictionnary.forEach((glyph, i) => {

                if (searchValue === glyph.fr) {

                    setSearchResult({
                        className: 'glyphSearchReturn',
                        content: <div>
                            <Linear
                                sequence={glyph.name.replace("_", "")}
                                size='100'
                                colors={[20, 20, 80]}
                                background='white'
                                cartouche={true}
                            />
                            <div className="searchResultPhono">
                                <span>{glyph.fr}</span>
                                <br />
                        [ {glyph.name.replace("_", "")} ]</div>
                        </div>
                    });
                    setBackState({
                        className: 'backState'
                    });
                }
            });

            wordList.forEach(word => {

                if (searchValue === word.fr) {

                    setSearchResult({
                        className: 'glyphSearchReturn',
                        content: <div>
                            <Linear
                                sequence={word.line}
                                size='50'
                                colors={[29, 55, 104]}
                                background='white'
                                cartouche={false}
                            />
                            <Molecule
                                sequence={word.molecule}
                                colors={[122, 161, 216]}
                                size='60'
                            />
                            <div className="searchResultWord">
                                <p>"{word.fr}"</p>
                                <h5>{word.litteral}</h5>
                                <span>[ {word.phono} ]</span>

                            </div>
                        </div>
                    });
                    setBackState({
                        className: 'backState'
                    });
                }
            })

        }

        if (searchValue === '') {
            setBackState({
                className: 'hidden'
            });
        }

        let matches = graphieros_dictionnary.filter(glyph => {
            const regex = new RegExp(`^${searchValue}`, 'gi');
            return glyph.fr.match(regex);
        });

        let matchesTrans = wordList.filter(w => {
            const regex = new RegExp(`^${searchValue}`, 'gi');
            return w.fr.match(regex);
        });


        // eslint-disable-next-line no-mixed-operators
        if (matchesTrans.length === 0 && matches.length === 0 || searchValue === '') {
            matches = [];
            matchesTrans = [];
            setSearchResult({
                className: 'hidden'
            });
            setTempSearchState({
                className: 'hidden'
            });
        }


        setTempResult({
            content: matches.map((el, i) => {
                return (
                    <div className="results"
                        key={`${el.fr}${i}`}>

                        <span>
                            <Linear
                                sequence={el.name.replace("_", "")}
                                size='20'
                                colors={[255, 99, 71]}
                                background='white'
                                cartouche={false}
                                padding=''
                            />
                        </span>
                        <p onClick={validateSearch}>{el.fr}</p><span className="phonoResult">{`[ ${el.name.replace("_", "")} ]`}</span>
                    </div>
                )
            })
        });

        setTempResultWord({
            content: matchesTrans.map((el, i) => {
                return (
                    <div className="results"
                        key={`${el.fr}${i}`}>
                        <span className="moleculeSpan">
                            <Molecule
                                sequence={el.molecule}
                                colors={[75, 106, 160]}
                                size='40'
                            />
                        </span>
                        <p className="combo" onClick={validateSearch}>{el.fr}</p>
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

    const letsQuitResult = () => {
        setSearchResult({
            className: 'hidden',
            content: ''
        });
        setBackState({
            className: 'hidden'
        });
    }

    const validateSearch = (props) => {

        graphieros_dictionnary.forEach((glyph, i) => {

            if (props.target.innerHTML === glyph.fr) {

                setSearchResult({
                    className: 'glyphSearchReturn',
                    content: <div>
                        <Linear
                            sequence={glyph.name.replace("_", "")}
                            size='100'
                            colors={[20, 20, 80]}
                            background='white'
                            cartouche={true}
                        />
                        <div className="searchResultPhono">
                            <span>{glyph.fr}</span>
                            <br />
                            [ {glyph.name.replace("_", "")} ]</div>
                    </div>
                });
                setBackState({
                    className: 'backState'
                });
            }
        });

        wordList.forEach((word, i) => {

            if (props.target.innerHTML === word.fr) {

                setSearchResult({
                    className: 'glyphSearchReturn',
                    content: <div>
                        <div>
                            <Linear
                                sequence={word.line}
                                size='50'
                                colors={[29, 55, 104]}
                                background='white'
                                cartouche={false}
                            />
                            <Molecule
                                sequence={word.molecule}
                                colors={[122, 161, 216]}
                                size='60'
                            />
                        </div>

                        <div className="searchResultWord">
                            <p>"{word.fr}"</p>
                            <h5>{word.litteral}</h5>
                            <span>[ {word.phono} ]</span>

                        </div>
                    </div>
                });
                setBackState({
                    className: 'backState'
                });
            }
        });
    }


    return (
        <React.Fragment>
            <div className={props.className}>
                <input
                    className="searchInput"
                    placeholder="rechercher un mot..."
                    type="text"
                    autoFocus
                    onFocus={e => e.currentTarget.select()}
                    onChange={searchWord}
                />
                <div className={tempSearchState.className}>
                    {tempResult.content}
                    {tempResultWord.content}
                </div>
                <div className={searchResult.className}>
                    {searchResult.content}
                    <div
                        className="quitResult"
                        onClick={letsQuitResult}>
                        <Fractal
                            sequence='zx-we'
                            colors={[255, 255, 255]}
                            svgSize={30}
                            background='rgb(255,91,79)'
                            backgroundRadius='100%'
                        />
                    </div>
                </div>
                <div className="counter">
                    glyphes: <span className="countTomato">{glyphCount}</span><br />
                    mots: <span className="countBlue">{wordCount}</span>
                </div>
            </div>
            <div className={backState.className} />
        </React.Fragment>


    )
}

export default React.memo(SearchBar);