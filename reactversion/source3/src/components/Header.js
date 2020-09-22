import React from 'react';
import './css/Header.css';
import Logo from './Logo';

function Header() {
    return (
        <div className='header'>
            <Logo
                className='logo-fractal'
                fontSize='1.618em'
                color='rgb(75,106,160)'
                svgSize='50'
                colors={[75,106,160]}
            />
        </div>
    )
}

export default Header
