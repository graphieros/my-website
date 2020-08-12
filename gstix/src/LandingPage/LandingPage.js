import React from 'react';
import Molecule from '../Molecule/Molecule';

const LandingPage = (props) => {

    const wrapper = {
        zIndex: '200',
        display: 'grid',
        position: 'fixed',
        margin: 'auto',
        height: '100vh',
        width:'100vw',
        cursor: 'pointer',
    }

    const wrapper_svg = {
        display: 'grid',
        alignContent: 'center',
        border: '4px solid rgb(240,255,255)',
        boxShadow: '5px 10px 10px rgba(77,53,33,0.75), 3px 6px 6px rgba(77,53,33,0.5) inset',
        marginTop:'-50px',
        width: '250px',
        height: '250px',
        marginLeft: '50%',
        transform: 'translate(-50%)',
        borderRadius: '100%',
        background: 'radial-gradient(at top left, white, rgb(100,130,150)',
        cursor: 'pointer'
    }

    const site_name = {
        display: 'block',
        position: 'relative',
        marginTop: '-100px',
        left: '50%',
        width: '100vw',
        textAlign: 'center',
        transform: 'translate(-50%)',
        fontFamily: "'Lobster', cursive",
        color: 'rgb(100,130,150)',
        fontSize: '2em',
        lineHeight: '30px',
        cursor: 'pointer'
    }

    const G = {
        fontFamily: "'Monoton', cursive",
        fontSize:'2em'
    }

    const small = {
        display: 'inline-block',
        marginLeft: '55px',
        fontSize: '0.6em',
        color: 'rgb(153,181,199)'
    }

    const middle = {
        display: 'block',
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translate(-50%)',
        fontFamily: "'Lobster', cursive",
        color: 'rgb(180,204,219)',
        width: '100vw',
        textAlign: 'center'
    }

    return (
        <div style={wrapper} className={props.className} onClick={()=> props.getIn()}>
            <div style={wrapper_svg}>
                <Molecule
                    className="landing_svg" //style managed in App.css
                    sequence="nmo ka tae"
                    strokeWidth=""
                    size="250"
                    borderRadius='100%'
                    background={[]}
                    colors={[240,255,255]}
                    border=''
                />
            </div>
            <div style={middle}>Click anywhere to continue...</div>
            <div style={site_name}>
                <span style={G}>G</span>stix<br/>
                <span style={small}>luxury stickers</span>
            </div>
        </div>
    )
}

export default LandingPage;