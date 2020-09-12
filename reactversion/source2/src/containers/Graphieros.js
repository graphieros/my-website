import React, { useState } from 'react';
import Description from '../components/Description';
import Linear from '../components/graphieros/Linear';
import Fractal from '../components/graphieros/Fractal';
import Arrow from '../components/Arrow';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import './css/Graphieros.css';


const Graphieros = () => {

    const glyphCount = graphieros_dictionnary.length;

    const [countState, setCountState] = useState(0);

    const [lineState, setLineState] = useState({
        sequence: ''
    });

    const [descriptionState, setDescriptionState] = useState("Qu'est ce que le graphieros? Cliquez sur le futur pour le savoir");

    const [descriptionPositionState, setDesriptionPositionState] = useState({
        className:'graphierosDescriptionStart'
    });

    const [desFracState, setDesFracState] = useState({
        sequence: 's'
    });

    const allSequences = [
        {
            fr: 'Le graphieros est une langue hexagonale.',
            seq: 'ptae-lgio-ney ma nmae-kfa ptae-lgio kli-fai-ksi .',
            frac: 'wz-zx-xe zx-we-qd'
        },
        {
            fr: `Cette langue est constituée de ${glyphCount} idéogrammes.`,
            seq: 'de ptae-lgio go nmae-srei-kfa-du ptae-tmei-toi-tsi .',
            frac:'wz-zx-xe zw'
        },
        {
            fr: 'Le graphieros se lit de haut en bas,',
            seq: 'fmai mea-psu-pa kto mea-psu-ni ,',
            frac: 'wz-zx-xe wz-zd'
        },
        {
            fr: 'et de gauche à droite.',
            seq:'te fmai mea-psu-dray kto mea-psu-drya .',
            frac: 'wz-zx-xe wz-zd-dw'
        },
        {
            fr: 'Le graphieros se parle.',
            seq:'ptae-lgio-ney ma pkae-da mea-lpae-lgio .',
            frac: 'wz-zx-xe wz-ze-ex-xw'
        },
        {
            fr: 'En connectant des glyphes entre eux,',
            seq: 'nwo meama-knoi ptae-tmei-toi-tsi ,',
            frac: 'wz-zx-xe wz-ze-ex-xw-qd'
        },
        {
            fr: "il est possible de représenter l'Univers.",
            seq: 'ma kli-frya-ma fa-zai-stoia kio-tew-ma .',
            frac: 'wz-zx-xe qz-ze-ed-dx-xw-wq'
        }
    ];

    if (countState === -1) {
        setCountState(0)
    }
    if (countState >= allSequences.length) {
        setCountState(0);
    }

    const handleNext = () => {
        setCountState(countState => countState += 1);
        let thatSequence = allSequences[countState].seq;
        let thatDescr = allSequences[countState].fr;
        let thatNum = allSequences[countState].frac;
        setLineState({
            sequence: `${thatSequence}`
        });
        setDescriptionState(thatDescr);
        setDesriptionPositionState({
            className:'graphierosDescription'
        });
        setDesFracState({
            sequence: thatNum
        });
    }

    const handlePrevious = () => {
        setCountState(countState => countState -= 1);
        let thatSequence = allSequences[countState].seq;
        let thatDescr = allSequences[countState].fr;
        let thatNum = allSequences[countState].frac;
        setLineState({
            sequence: `${thatSequence}`
        });
        setDescriptionState(thatDescr);
        setDesriptionPositionState({
            className:'graphierosDescription'
        });
        setDesFracState({
            sequence: thatNum
        });
    }

    return (
        <div>
            <div className="vitruve">
                <Linear
                    className='graphierosDescriptionTranslation'
                    sequence={lineState.sequence}
                    colors={[255, 255, 255]}
                    size='35'
                />
                <div className='arrowsWrapper'>
                    <div
                        onClick={handleNext}
                        className='arrows'>
                        <Arrow
                            className='gArrows right'
                            sequence='kto'
                            colors={[255, 255, 255]}

                        />
                    </div>
                    <div
                        onClick={handlePrevious}
                        className='arrows'>
                        <Arrow
                            className='gArrows left'
                            sequence='fmai'
                            colors={[255, 255, 255]}

                        />
                    </div>
                </div>
            </div>
            <Description className={descriptionPositionState.className}>
                <Fractal
                    className='fracNum'
                    colors={[255,99,71]}
                    svgSize='40'
                    sequence={desFracState.sequence}
                />
                <p>{descriptionState}</p>
            </Description>


        </div>
    )
}

export default Graphieros;