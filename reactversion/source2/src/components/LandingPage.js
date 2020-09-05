import React from 'react';
import Fractal from '../components/graphieros/Fractal';
import clouds from '../assets/clouds.png';
import '../css/LandingPage.css';


const LandingPage = (props) => {

    const style = {
        backgroundImage: `url(${clouds})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'
    }

    return (
        <div className={props.className}>
            <p className='quote'>L'art est un léger déséquilibre.</p>
            <div onClick={props.close}>
                <Fractal
                    className='landingFractal'
                    colors={[75, 106, 160]}
                    sequence='wz-zd-dw-qs-se-xs wq-qz-ze-ed-dx-xw-we-xz-qd ed-dx-qd ze-ed-eq-ex-ew'
                    svgSize='200'
                    light={true}
                    intensity='1.3'
                    dropShadow='0 10px 2px rgba(29,55,104,0.75)'
                    background='linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.2))'
                    backgroundRadius='50px'
                />
            </div>
            <div className="backLanding" style={style} />

            <div className='landingName'>
                <span>A</span>lec <span>L</span>loyd <span>P</span>robert
                </div>


        </div>
    )
}

export default LandingPage;