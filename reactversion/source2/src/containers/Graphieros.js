import React, { useState } from 'react';
import Description from '../components/Description';
import Linear from '../components/graphieros/Linear';
import Arrow from '../components/Arrow';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import './css/Graphieros.css';

//https://graphieros.com/touch_writer/touch_writer.html

const Graphieros = () => {

    const glyphCount = graphieros_dictionnary.length;

    const [countState, setCountState] = useState(0);

    const [lineState, setLineState] = useState({
        sequence: ''
    });

    const [descriptionState, setDescriptionState] = useState("Qu'est ce que le graphieros? Cliquez sur le futur pour le savoir");


    const allSequences = [
        {
            fr: 'Le graphieros est une langue hexagonale.',
            seq: 'ptae-lgio-ney ma nmae-kfa ptae-lgio kli-fai-ksi .'
        },
        {
            fr: `Cette langue est constituée de ${glyphCount} idéogrammes.`,
            seq: 'de ptae-lgio go nmae-srei-kfa-du ptae-tmei-toi-tsi .'
        },
        {
            fr: 'Le graphieros se lit de haut en bas,',
            seq: 'fmai mea-psu-pa kto mea-psu-ni ,'
        },
        {
            fr: 'et de gauche à droite.',
            seq:'te fmai mea-psu-dray kto mea-psu-drya .'
        },
        {
            fr: 'Le graphieros se parle.',
            seq:'ptae-lgio-ney ma pkae-da mea-lpae-lgio .'
        },
        {
            fr: 'En connectant des glyphes entre eux,',
            seq: 'nwo meama-knoi ptae-tmei-toi-tsi ,'
        },
        {
            fr: "il est possible de représenter l'Univers.",
            seq: 'ma kli-frya-ma fa-zai-stoia kio-tew-ma .'
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
        setLineState({
            sequence: `${thatSequence}`
        });
        setDescriptionState(thatDescr);
    }

    const handlePrevious = () => {
        setCountState(countState => countState -= 1);
        let thatSequence = allSequences[countState].seq;
        let thatDescr = allSequences[countState].fr;
        setLineState({
            sequence: `${thatSequence}`
        });
        setDescriptionState(thatDescr);
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
            <Description className='graphierosDescription'>
                <p>{descriptionState}</p>
            </Description>


        </div>
    )
}

export default Graphieros;