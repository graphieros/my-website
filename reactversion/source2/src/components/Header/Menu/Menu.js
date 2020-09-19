import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fractal from '../../graphieros/Fractal';
import Modal from '../../Modal/Modal';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';

const Menu = (props) => {

    const [modalState, setModalState] = useState({
        className: 'hidden'
    });

    const [tempBackState, setTempBackState] = useState({
        className: 'hidden'
    });

    const handleShowMenu = () => {

        setModalState({
            className: 'modalVisible'
        });
        setTempBackState({
            className: 'backState'
        });
    }

    const handleQuitMenu = () => {
        setModalState({
            className: 'hidden'
        });
        setTempBackState({
            className: 'hidden'
        });
    }

    return (
        <div>
            <div
                className={props.className}
                onClick={handleShowMenu}>

                <Fractal className='fractalMenu'
                    sequence='ze-qd-wx'
                    colors={[30, 30, 80]}
                    light={false}
                    intensity=''
                    background='white'
                    backgroundRadius='100%'
                    svgSize='50'
                />
            </div>

            <Modal className={modalState.className}>

                <Link to="/parcours" onClick={handleQuitMenu}>
                    <MenuItem
                        id='menuItemParcours'
                        className='menuItem'
                        content='parcours'
                        color='var(--blue4)'
                        sequence='dwa'
                        R={122}
                        G={161}
                        B={216}
                        rotate={-10}
                    />
                </Link>

                <Link to="/art" onClick={handleQuitMenu}>
                    <MenuItem
                        id='menuItemArt'
                        className='menuItem'
                        content='art'
                        color='var(--blue4)'
                        sequence='sta'
                        R={122}
                        G={161}
                        B={216}
                        rotate={10}
                    />
                </Link>

                <Link to="/webDev" onClick={handleQuitMenu}>
                    <MenuItem
                        id='menuItemWeb'
                        className='menuItem'
                        content='web dev'
                        color='var(--blue4)'
                        sequence='grae'
                        R={122}
                        G={161}
                        B={216}
                        rotate={-10}
                    />
                </Link>

                <Link
                    to='/contact.php'
                    target='_blank'
                    onClick={handleQuitMenu}>
                    <MenuItem
                        id='menuItemContact'
                        className='menuItem'
                        content='contact'
                        color='var(--blue4)'
                        sequence='krye'
                        R={122}
                        G={161}
                        B={216}
                        rotate={10}
                    />
                </Link>


                <div onClick={handleQuitMenu} >
                    <Fractal
                        className='fractalQuit'
                        sequence='zx-ew'
                        colors={[255, 255, 255]}
                        background='tomato'
                        backgroundRadius='100%'
                        svgSize='30'
                    />
                </div>

                <Link to='/blog' onClick={handleQuitMenu}>
                    <div className='blogLink'>
                        blog
                    </div>
                </Link>

            </Modal>

            <div className={tempBackState.className}></div>

        </div>

    )
}

export default React.memo(Menu);
