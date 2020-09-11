import React, { useState } from 'react';
import './css/Media.css';
import Fractal from '../components/graphieros/Fractal';
import Bubble from '../components/Bubble';

const Media = () => {

    const [bubble0State, setBubble0State] = useState({
        className: 'bubbleStart',
        content: "J'ai inventé une langue"
    });

    const [bubble1State, setBubble1State] = useState({
        className: 'hidden'
    });

    const [bubble2State, setBubble2State] = useState({
        className: 'hidden'
    });

    const [bubble3State, setBubble3State] = useState({
        className: 'hidden'
    });

    const [bubble4State, setBubble4State] = useState({
        className: 'hidden'
    });

    const [bubble5State, setBubble5State] = useState({
        className: 'hidden'
    });

    const [bubble6State, setBubble6State] = useState({
        className: 'hidden'
    });

    const [fractalBangState, setFractalBangState] = useState({
        className: 'hidden'
    });

    const [ contactLinkState, setContactLinkState] = useState({
        className:'hidden'
    });

    const restart = () => {
        setFractalBangState({
            className: 'hidden'
        });
        setBubble0State({
            className: 'bubbleStart',
            content: "J'ai inventé une langue"
        });
        setBubble1State({
            className:'hidden'
        });
        setBubble2State({
            className:'hidden'
        });
        setBubble3State({
            className:'hidden'
        });
        setBubble4State({
            className:'hidden'
        });
        setBubble5State({
            className:'hidden'
        });
        setBubble6State({
            className:'hidden'
        });
        setContactLinkState({
            className: 'hidden'
        });
    }


    const showNextBubble = () => {

        setBubble0State({
            className: 'bubbleStartStop',
            content: "J'ai inventé une langue",
            onClick: ''
        });

        setBubble1State({
            className: 'bubble1',
            content: "pour écrire des textes secrets",
        });
    }

    const showNextBubble1 = () => {
        setBubble1State({
            className: 'bubble1Stop',
            content: "pour écrire des textes secrets",
            onClick: ''
        });
        setBubble2State({
            className: 'bubble2',
            content: "pour peindre des tableaux"
        });
    }

    const showNextBubble2 = () => {
        setBubble2State({
            className: 'bubble2Stop',
            content: "pour peindre des tableaux",
            onClick: ''
        });

        setBubble3State({
            className: 'bubble3',
            content: "Je crée des sites web",
            onClick: ''
        });
    }

    const showNextBubble3 = () => {
        setBubble3State({
            className: 'bubble3Stop',
            content: "Je crée des sites web",
            onClick: ''
        });
        setBubble4State({
            className: 'bubble4',
            content: "avec des particules"
        });
    }

    const showNextBubble4 = () => {
        setBubble4State({
            className: 'bubble4Stop',
            content: "avec des particules",
            onClick: ''
        });
        setBubble5State({
            className: 'bubble5',
            content: "j'écris des poèmes"
        });
    }


    const showNextBubble5 = () => {
        setBubble5State({
            className: 'bubble5Stop',
            content: "j'écris des poèmes",
            onClick: ''
        });
        setBubble6State({
            className: 'bubble6',
            content: "avec des points qui vibrent"
        });
    }

    const showNextBubble6 = () => {
        setBubble0State({
            className: 'hidden'
        });
        setBubble6State({
            className: 'bubble6Contract',
            content: '',
            onClick: ''
        });
        setBubble5State({
            className: 'bubble5Contract',
            content: '',
            onClick: ''
        });
        setBubble4State({
            className: 'bubble4Contract',
            content: '',
            onClick: ''
        });
        setBubble3State({
            className: 'bubble3Contract',
            content: '',
            onClick: ''
        });
        setBubble2State({
            className: 'bubble2Contract',
            content: '',
            onClick: ''
        });
        setBubble1State({
            className: 'bubble1Contract',
            content: '',
            onClick: ''
        });
        setFractalBangState({
            className: 'fractalBang'
        });
        setContactLinkState({
            className:'contactLink'
        });
    }


    return (
        <>
            <Bubble
                className={bubble0State.className}
                content={bubble0State.content}
                onClick={showNextBubble}
            />
            <Bubble
                className={bubble1State.className}
                content={bubble1State.content}
                onClick={showNextBubble1}
            />
            <Bubble
                className={bubble2State.className}
                content={bubble2State.content}
                onClick={showNextBubble2}
            />
            <Bubble
                className={bubble3State.className}
                content={bubble3State.content}
                onClick={showNextBubble3}
            />
            <Bubble
                className={bubble4State.className}
                content={bubble4State.content}
                onClick={showNextBubble4}
            />
            <Bubble
                className={bubble5State.className}
                content={bubble5State.content}
                onClick={showNextBubble5}
            />
            <Bubble
                className={bubble6State.className}
                content={bubble6State.content}
                onClick={showNextBubble6}
            />
            <div onClick={restart}>
                <Fractal
                    className={fractalBangState.className}
                    sequence='qz-ze-ed-dx-xw-wq-we-xs-dz zx-ws-qe ze-eq-xw-wd'
                    colors={[255, 177, 163]}
                    light={true}
                    intensity='1.3'
                    svgSize='300'
                    dropShadow='0 10px 10px rgb(29,55,104)'
                />
            </div>
            <a className={contactLinkState.className} target='_blank' rel='noopener noreferrer' href='https://graphieros.com/contact.php'>CONTACT</a>
        </>
    )
}

export default React.memo(Media);