import React, { useState } from 'react';
import { graphieros_dictionnary } from '../../../libraries/graphieros_dictionnary';
import Linear from '../../graphieros/Linear';
import Fractal from '../../graphieros/Fractal';
import './SearchBar.css'

const SearchBar = (props) => {

    const [searchResult, setSearchResult] = useState({
        className: 'hidden',
        content: ''
    });

    const [tempResult, setTempResult] = useState({
        content: ''
    });

    const [tempSearchState, setTempSearchState] = useState({
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
                        content: <div><Linear
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
                        <p onClick={validateSearch}>{el.fr}</p>
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
        })
    }

    const validateSearch = (props) => {

        graphieros_dictionnary.forEach((glyph, i) => {

            if (props.target.innerHTML === glyph.fr) {

                setSearchResult({
                    className: 'glyphSearchReturn',
                    content: <div><Linear
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
            }
        });
    }


    return (
        <div className={props.className}>
            <input
                className="searchInput"
                placeholder="rechercher..."
                type="text"
                autoFocus
                onFocus={e => e.currentTarget.select()}
                onChange={searchWord}
            />
            <div className={tempSearchState.className}>
                {tempResult.content}
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
        </div>
    )
}

export default SearchBar;