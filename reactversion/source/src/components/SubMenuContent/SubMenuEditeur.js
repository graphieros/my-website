import React, { useState } from 'react';
import './SubMenuEditeur.css';
import LineGlyph from './EditeurComponents/Linear';


const SubMenuEditeur = () => {

    const [sequenceState, setSequenceState] = useState({
        sequence: 'keo-kadwa , kio-tew-ma !',
        size:50
    });


    const valueHandler = (props) => {
        setSequenceState({
            sequence: props.target.value,
            size: props.size
        });
        
    }


    return (
        <div>
            <div className="editeurControl">
                <h1>Editeur</h1>
                <p>Saisissez des glyphes par leur phonologie<br /><span>Les glyphes d'un même mot sont reliés par un " - "</span></p>
                <textarea
                    defaultValue='keo-kadwa , kio-tew-ma !'
                    type="text"
                    id="editeurInput"
                    autoFocus
                    onFocus={e => e.currentTarget.select()}
                    onChange={valueHandler}
                />
            
            </div>
            <LineGlyph
                className="glyphLine"
                sequence={sequenceState.sequence}
                size={sequenceState.size}
                colors={[100,50,50]}
                background="radial-gradient(at top, white, tomato)"
                cartouche={true}
                border='1px solid tomato'
                padding=''
                boxShadow='0 20px 40px -12px rgba(100,0,0,.35)'
            />
            <div className="backgroundFiddle"></div>
        </div>
    )
}

export default SubMenuEditeur;