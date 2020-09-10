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
        className:'hidden'
    });

    const [bubble2State, setBubble2State] = useState({
        className:'hidden'
    });

    const [bubble3State, setBubble3State] = useState({
        className: 'hidden'
    });

    const [bubble4State, setBubble4State] = useState({
        className: 'hidden'
    });

    const showNextBubble = () => {

        setBubble0State({
            className:'bubbleStartStop',
            content: "J'ai inventé une langue",
            onClick: ''
        });

        setBubble1State({
            className:'bubble1',
            content:"pour écrire des textes secrets"
        });
    }

    const showNextBubble1 = () => {
        setBubble1State({
            className:'bubble1Stop',
            content: "pour écrire des textes secrets"
        });
        setBubble2State({
            className:'bubble2',
            content:"pour peindre des tableaux"
        });
    }

    const showNextBubble2 = () => {
        setBubble2State({
            className:'bubble2Stop',
            content: "pour peindre des tableaux"
        });

        setBubble3State({
            className:'bubble3',
            content:"Je crée des sites web"
        });
    }

    const showNextBubble3 = () => {
        setBubble3State({
            className:'bubble3Stop',
            content: "Je crée des sites web"
        });
        setBubble4State({
            className: 'bubble4',
            content: "avec des particules"
        });
    }

    const showNextBubble4 = () => {
        setBubble4State({
            className: 'bubble4Stop',
            content: "avec des particules"
        })
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
        </>
    )
}

export default React.memo(Media);