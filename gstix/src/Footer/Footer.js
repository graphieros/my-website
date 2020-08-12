import React from 'react';

const Footer = () => {

    const style_main = {
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '50px',
        background: 'transparent',
        fontFamily: "'Oswald', sans-serif",
        display: 'grid',
        justifyItems: 'center',
        textAlign: 'center',
        height: '100px',
        borderTop: '1px solid rgb(156,171,180)',
        boxSizing: 'border-box',
        padding: '20px',
        color: 'rgb(100,130,150)',
        lineHeight: '10px'
    }

    const style_span = {
        fontSize: '0.7em'
    }

    return(
        <footer style={style_main}>
            <b>G stix</b><br/>
            <span style={style_span}>designed by</span><br/>
            Alec Lloyd Probert
        </footer>
    )
}

export default Footer;