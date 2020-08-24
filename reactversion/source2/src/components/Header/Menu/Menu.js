import React, { useState } from 'react';
import Fractal from '../../graphieros/Fractal';
import Modal from '../../Modal/Modal';
import './Menu.css';

const Menu = (props) => {

    const [modalState, setModalState] = useState({
        className: 'hidden'
    });

    const [ tempBackState, setTempBackState ] = useState({
        className: 'hidden'
    });

    const handleShowMenu = () => {
        setModalState({
            className: 'modalVisible'
        });
        setTempBackState({
            className:'backState'
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

            </div> <Modal className={modalState.className}>
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
