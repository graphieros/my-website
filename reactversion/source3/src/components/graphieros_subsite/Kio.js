import React, { useState, useEffect } from 'react';
import './css/Kio.css';
import Button from '../Button';
import Fractal from '../graphieros/Fractal';
import KioContentLinear from './KioContentLinear';
import KioContentIdeas from './KioContentIdeas';
import KioContentTheory from './KioContentTheory';

function Kio() {

    const [kioLandingState, setKioLandinState] = useState({
        className:'kio-landing'
    });
    const [kioSubMenuState0, setKioSubMenuState0] = useState({
        className: 'hidden'
    });
    const [kioSubMenuState1, setKioSubMenuState1] = useState({
        className: 'hidden'
    });
    const [kioSubMenuState2, setKioSubMenuState2] = useState({
        className: 'hidden'
    });

    const handleShow0 = () => {
        setKioLandinState({
            className:'hidden'
        });
        setKioSubMenuState0({
            className:'kio-open-0'
        });
        setKioSubMenuState1({
            className:'hidden'
        });
        setKioSubMenuState2({
            className:'hidden'
        });
    }
    const handleShow1 = () => {
        setKioLandinState({
            className:'hidden'
        });
        setKioSubMenuState0({
            className:'hidden'
        });
        setKioSubMenuState1({
            className:'kio-open-1'
        });
        setKioSubMenuState2({
            className:'hidden'
        });
    }
    const handleShow2 = () => {
        setKioLandinState({
            className:'hidden'
        });
        setKioSubMenuState0({
            className:'hidden'
        });
        setKioSubMenuState1({
            className:'hidden'
        });
        setKioSubMenuState2({
            className:'kio-open-2'
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
        <div className='graph-landing-body'>
        <div className={kioLandingState.className}>
            <Fractal 
                className='kio-landing-fractal'
                sequence='xq-qz-zw-wd-ds zq-qw-ws-sx-xd-de qw-wz-sx-xe'
                svgSize='300'
                size='30'
                colors={[122,161,216]}
                light={true}
                dropShadow='0px 0px 5px white'
            />
        </div>    
        <div className='kio-menu'>
            <Button
                onClick={handleShow0}
                className='kio-menu-button'
                sequence='ze-qs-wx zw-ex'
                colors={[29,55,104]}
                svgSize='60'
            />
            <Button
                onClick={handleShow1}
                className='kio-menu-button'
                sequence='qe-es-sq-xs-wd zw-wd-dz-qs-se-xs'
                colors={[29,55,104]}
                svgSize='60'
            />
            <Button
                onClick={handleShow2}
                className='kio-menu-button'
                sequence='sw-wq-qz-ze-ed-dw-wx qz-ze-ed-dx-xw-wq'
                colors={[29,55,104]}
                svgSize='60'
            />
        </div>
        </div>
        <KioContentLinear className={kioSubMenuState0.className} />
        <KioContentIdeas className={kioSubMenuState1.className} />
        <KioContentTheory className={kioSubMenuState2.className} />
        </>
    )
}

export default Kio;
