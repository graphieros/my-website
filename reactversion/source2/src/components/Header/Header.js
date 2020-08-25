import React from 'react';
import Menu from './Menu/Menu';
import SearchBar from './SearchBar/SearchBar';
import Molecule from '../graphieros/Molecule';
import './Header.css';

const Header = (props) => {

    //display graphieros glyph search at all times

    return (
        <div className={props.className}>
            <div className="siteTitle">
                <div>
                    <span>A</span>lec <span>L</span>loyd <span>P</span>robert
                </div>
            </div>
            <div className="smallSiteTitle">
                <Molecule
                    sequence='nmo ka tae'
                    colors={[255, 255, 255]}
                    size='200'
                    strokeWidth='3'
                />
            </div>
            <SearchBar className="searchBar" />
            <Menu className="mainMenu" />
        </div>
    )
}

export default Header;