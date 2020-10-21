import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './css/Alp.css';
import face from '../assets/face.jpg';
import Fractal from './graphieros/Fractal';

function Alp() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className='alp-body'>
            <div className='alp-title'>
                Alec Lloyd Probert
            </div>
            <div className='alp-bio'>
                <img className='alp-portrait'
                    src={face}
                    alt='portrait Alec Lloyd Probert, créateur du graphieros' />
                <p className='subTitle'>BIO</p>
                <p className='alp-text'>Je suis né en 1979, dans le parc de Maisons-Laffitte, des mains d'un docteur qui portait le nom opportun de Docteur Hazard.
                <br /><br />
                J'aime faire les choses par moi-même. Un jour, à l'âge de cinq ans, j'ai construit une table, pour pouvoir déjeuner en regardant de loin manger les autres.
                <br /><br />
                Je suis autodidacte, depuis l'enfance. J'ai donc pris beaucoup de temps à construire des tables, au lieu de me servir de celles qui existent déjà, et ce faisant, je me suis développé à ma façon, j'ai appris la patience, j'ai conquis mes erreurs et mon style.
                <br /><br />
                J'ai commencé à peindre à l'huile vers 1989. Mon premier tableau s'intitulait 'rade bretonne'. C'était un carton entoilé, où il fallait remplir des zones numérotées avec les couleurs correspondantes. Je n'ai pas respecté les numéros.
                <br /><br />
                J'ai pris goût pour la flexibilité de la peinture à l'huile, la sensation de la brosse sur la toile, les reflets de lumière sur la couleur encore fraîche.
                <br /><br />
                Sur mon parcours d'autodidacte subsiste l'anomalie de cinq années de conservatoire de musique entre 1987 et 1992, où l'on m'appris à jouer de la guitare classique. Quand vint le temps de la puberté, en quittant le conservatoire, je découvris les joies de simplement improviser.
                <br /><br />
                Avec des camarades, je publiai au collège et au lycée plusieurs fanzines, où je dessinais des bandes, écrivais quelques textes, pour faire rire les autres.
                <br /><br />
                Puis un jour de 1996, je voulus peindre à l'huile de nouveau, avec plus de sérieux qu'en enfance, pensant avoir quelque chise au bout des doigts que le monde devait voir. J'avais découvert sur le tard et Dali et Picasso, et Ingres et d'autres grands noms facilement accessibles au classé moyen, par l'universalité de leur génie.
                <br /><br />
                C'est de ces grands maîtres et du Louvre que j'appris à comprendre mes erreurs, commettre des oeuvres, pour trouver quelque chose qui me permette d'exprimer une vision du millénaire finissant.
                <br /><br />
                Le 11 septembre 2001, je peignais une fresque sur l'île de Formentera. Je pense que le soleul s'est chargé depuis de reprendre au mur ses couleurs. Là-bas, j'ai trouvé mon style, sur les chemins pierreux et chargés des parfums aromatiques de la méditerrannée.
                <br /><br />
                C'est un style cellulaire, en référence peut-être à ce nouvel organe qui se greffa à nos corps peu à peu au début du siècle, et sans lequel aujourd'hui nul n'oserait s'aventurer dans le monde.
                <br /><br />
                En pensant la peinture à partir de cellules, j'aboutis aux fondements de toute approche graphique: le point. Et depuis ce point, j'ai inventé un langage.
                </p>
            </div>
            <div className='alp-other'>
                <p className='subTitle'>Ce que je fais aussi</p>
                <li><strong>Data-analyse</strong>, parce que j'aime résoudre des problèmes, organiser les données pour les interpréter (Excel, Python, SAS)</li>
                <br />
                <li><strong>Web développement front-end</strong> (html, css, JavaScript, React, svg)</li>
                <br />
                <p className='p-bio-contact'>contact:</p>
                <Link to='/contact.php'>
                    <Fractal
                        className='fractal-bio-contact'
                        sequence='qw-wd-de-es-sq-qe'
                        svgSize='100'
                        colors={[255, 255, 255]}
                    />
                </Link>

            </div>
        </div>
    )
}

export default Alp;
