import React from'react';

const Header = () => {

    const header = {
        width: '100vw',
        height: '60px',
        background: 'linear-gradient(to right, white,rgb(100,130,150))',
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100
    };

    const header_logo = {
        display:'block',
        positon: 'absolute',
        height:'150px',
        width: '150px',
        fontSize:'2em',
        left: '0px',
        boxSizing: 'border-box',
        paddingLeft:'20px',
        paddingRight: '20px',
        paddingTop: '13px',
        fontFamily: "'Lobster', cursive",
        color: 'rgb(100,130,150)',
        marginLeft: 0,
        borderRadius: '0 100% 100% 100%'
        }

    const header_logo_span = {
        fontFamily: "'Monoton', cursive",
        fontSize: '2em'
    }    

    return(
        <header style={header}>
            <div style={header_logo}>
                <span style={header_logo_span}>G</span>stix
            </div>
        </header>
    )
}

export default Header;