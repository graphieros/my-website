import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fractal from './graphieros/Fractal';
import Button from './Button';
import './css/Menu.css';

function Menu() {

    const [menuState, setMenuState] = useState({
        className: 'hidden'
    });

    const handleShowMenu = () => {
        setMenuState({
            className: 'menu-body'
        });
    }

    const handleQuitMenu = () => {
        setMenuState({
            className: 'hidden'
        });
    }

    return (
        <div>
            <div onClick={handleShowMenu}>
                <Fractal
                    className='menu-fractal'
                    sequence='ze-qd-wx'
                    colors={[255, 255, 255]}
                    svgSize='50'
                />
            </div>

            <div className={menuState.className}>
                <Link
                    className='link'
                    to='/galerie'>
                    <Button
                        className='menu-button'
                        fractalClassName='menu-fractal-choice'
                        colors={[211,227,252]}
                        sequence='eq-qd-qx-zs-sw'
                        svgSize='60'
                        pClass='button-label'
                        label='galerie'
                    />
                </Link>

                <Link
                    className='link'
                    to='/blog'>
                    <Button
                        className='menu-button'
                        fractalClassName='menu-fractal-choice'
                        colors={[211,227,252]}
                        sequence='zw-ws-qd-dx'
                        svgSize='60'
                        pClass='button-label'
                        label='blog'
                    />
                </Link>

                <Link
                    className='link'
                    to='/cle.html'
                    target="_blank">
                    <Button
                        className='menu-button'
                        fractalClassName='menu-fractal-choice'
                        colors={[211,227,252]}
                        sequence='zw-ws-qd-dx'
                        svgSize='60'
                        pClass='button-label'
                        label='la clé'
                    />
                </Link>

                <Link
                    className='link'
                    to='/contact.php'
                    target='_blank'>
                    <Button
                        className='menu-button'
                        fractalClassName='menu-fractal-choice'
                        colors={[211,227,252]}
                        sequence='qw-wd-de-eq-qs-se'
                        svgSize='60'
                        pClass='button-label'
                        label='contact'
                    />
                </Link>
                <div className='quitResult' onClick={handleQuitMenu}>
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

export default Menu;
