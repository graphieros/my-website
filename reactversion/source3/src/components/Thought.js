import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fractal from './graphieros/Fractal';
import './css/Thought.css';

function Thought(props) {

    const [switcher, setSwitcher] = useState({
        switchValue: 0,
        textValue: 'afficher',
        sequence: 'qw-wd-de-es-sq-qe'
    });

    const [textState, setTextState] = useState({
        className: 'hidden',
    });

    const [commentState, setCommentState] = useState({
        className: 'hidden'
    })

    const handleShowText = () => {
        if (switcher.switchValue === 0) {
            setTextState({
                className: 'thought-text'
            });
            setCommentState({
                className: 'comment'
            })
            setSwitcher({
                switchValue: 1,
                textValue: 'réduire',
                sequence: 'ez-zq-qs-se-ed-dw-wq'
            });
        } else {
            setTextState({
                className: 'hidden'
            });
            setCommentState({
                className: 'hidden'
            });
            setSwitcher({
                switchValue: 0,
                textValue: 'afficher',
                sequence: 'qw-wd-de-es-sq-qe'
            });
        }

    }

    return (
        <div className='thought-body' onClick={handleShowText}>
            <p className='thought-help'>cliquez sur le titre pour {switcher.textValue} le texte</p>
            <div className='thought-title'>
                <Fractal
                    className='thought-fractal'
                    svgSize='61.8'
                    sequence={switcher.sequence}
                    colors={props.colors}
                    light={true}
                />{props.title}</div>
            <div className='thought-date'>{props.date}</div>
            <p className={textState.className}>
                {props.text}
            </p>
            <Link to='/contact.php' target='_blank'>
                <div className={commentState.className}>
                    <Fractal
                        className='blog-comment-fractal'
                        sequence='qw-wd-de-eq-qs-se'
                        svgSize='50'
                        colors={[255, 255, 255]}
                        size='30'
                    />
                Offrir un commentaire
            </div>
            </Link>

        </div>
    )
}

export default Thought;
