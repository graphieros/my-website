import React, { useState } from 'react';
import Fractal from '../components/graphieros/Fractal';
import './css/Bio.css';
import face from '../assets/face.jpg';
import Alp from '../components/Alp';


const Bio = () => {


    const story = [
        "Suivez la flèche...",
        "Je suis né en 1979, dans le parc de Maisons-Laffitte, des mains d'un docteur qui portait le nom opportun de Docteur Hazard...",
        "J'aime faire les choses par moi-même. Un jour, à l'âge de cinq ans, j'ai construit une table...",
        "...pour pouvoir manger en regardant de loin manger les autres...",
        "Je suis autodidacte, depuis l'enfance. J'ai donc utilisé beaucoup de temps à construire des tables, au lieu de me servir de celles qui existent déjà...",
        "...et ce faisant, je me suis développé à ma façon, j'ai appris la patience et j'ai conquis mon style.",
        "J'ai commencé à peindre à l'huile vers 1989. Mon premier tableau s'intitulait 'rade bretonne'...",
        "...c'était un carton entoilé où il fallait remplir des zones numérotées, avec les couleurs correspondantes. Je n'ai pas respecté les numéros...",
        "...et j'ai pris goût pour la flexibilité de la peinture à l'huile, la sensation de la brosse sur la toile, les reflets de lumière sur la couleur encore fraîche.",
        "Sur mon parcours d'autodidacte subsiste l'anomalie de cinq ans de conservatoire de musique, où l'on m'appris à jouer de la guitare classique. Cela commença en 1987...",
        "...et quand vint le temps de la puberté, je quittai le conservatoire, pour pouvoir jouer de la guitare comme bon me semblait.",
        "Avec des camarades, je publiai au collège et au lycée plusieurs fanzines, où je dessinais des bandes, écrivais quelques textes, souhaitant faire rire les autres comme je riais intérieurement devant Fluide Glacial...",
        "...et puis un jour je voulus peindre à l'huile de nouveau, avec plus de sérieux qu'en enfance, pensant avoir quelque chose au bout des doigts que le monde devait savoir...",
        "...j'avais découvert sur le tard et Dali et Picasso, Ingres, et d'autres grands noms facilement accessibles au classé moyen...",
        "...c'est d'eux et du Louvre que j'appris à faire des erreurs, ou commettre des oeuvres, essayant de trouver quelque chose qui puisse exprimer une vision du millénaire finissant.",
        "Le 11 septembre 2001, je peignais une fresque à Formentera. Je pense que le soleil s'est chargé de reprendre ses couleurs. Là bas, j'ai trouvé mon style...",
        "...un style cellulaire, en référence peut-être à ce nouvel organe qui se greffait à nous peu à peu au début du siècle, et sans lequel aujourd'hui nul n'oserait s'aventurer dans le monde.",
        "En pensant la peinture à partir de cellules, je finis par atteindre les fondements de toute création graphique, le point. Et depuis ce point, j'ai inventé un langage."
    ];

    let [count, setCount] = useState(0);


    const [contentState, setContentState] = useState({
        content: story[0]
    });

    const handleStory = () => {

        console.log(count);
        if (count > story.length - 1) {
            count = 0;
            setContentState({
                content: story[count]
            });
        } else {
            setCount(count + 1);
        }
        if (count === 0) {
            count = 1;
            setContentState({
                content: story[0]
            })
        }
        setCount(count + 1)
        setContentState({
            content: story[count]
        });
        if (count === 0) {
            count = 1;
        }
        console.log(count);
    }

    let publicCount = count - 1;
    if (publicCount === -1) {
        publicCount = ''
    } else {
        publicCount = `${publicCount} / ${story.length - 1}`
    }

    return (

        <div>
            <div className='bioFractalWrapper'>
                <Fractal
                    sequence='we-xs-dz-ze-ed-dx-xw-wq-qz zx-ws-qe ze-eq-xw-wd'
                    colors={[122, 161, 216]}
                    svgSize='300'
                    light={true}
                    intensity='2'
                />
            </div>

            <div className="biopicWrapper">
                <img src={face} alt="alp" />
            </div>

            <div id="storyArrow" onClick={handleStory}>
                <Fractal
                    sequence='qd-ed-dx'
                    colors={[75, 106, 160]}
                    size='40'
                    svgSize='60'
                    radius=''
                    background='white'
                    light={true}
                    intensity='1.1'
                    border=''
                    backgroundRadius='100%'
                    dropShadow=''
                />
            </div>

            <div id='story'>
                <span>{publicCount}</span>
                {contentState.content}
            </div>

            <Alp className='alpBio' />

        </div>
    )
}

export default Bio;