import React from 'react';
import Menu from './Menu/Menu';
import SearchBar from './SearchBar/SearchBar';
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

            <SearchBar className="searchBar" />
            <Menu className="mainMenu" />
        </div>
    )
}

export default Header;