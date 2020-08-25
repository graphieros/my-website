import React, { useState } from 'react';
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

                <MenuItem
                    className='menuItem'
                    content='parcours'
                    color='var(--blue4)'
                    sequence='dwa'
                    R={122}
                    G={161}
                    B={216}
                    rotate={-10}
                />

                <MenuItem
                    className='menuItem'
                    content='peintures'
                    color='var(--blue4)'
                    sequence='sta'
                    R={122}
                    G={161}
                    B={216}
                    rotate={10}
                />

                <MenuItem
                    className='menuItem'
                    content='graphieros'
                    color='var(--blue4)'
                    sequence='lgio'
                    R={122}
                    G={161}
                    B={216}
                    rotate={-10}
                />

                <MenuItem
                    className='menuItem'
                    content='contact'
                    color='var(--blue4)'
                    sequence='krye'
                    R={122}
                    G={161}
                    B={216}
                    rotate={10}
                />

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

            </Modal>

            <div className={tempBackState.className}></div>

        </div>

    )
}

export default Menu;
