import React from 'react';
import './css/Livres.css';
import Livre from '../components/Livre';
import accords from '../assets/books/accords.png';
import hexagerations from '../assets/books/hexagerations.png';
import objedtDesir from '../assets/books/objedtDesir.png';
import cle from '../assets/books/cle.png';

const Livres = () => {
    return(
        <div>
            <div className="textePresentation">
                <p className="textePresentationTitle">Textes</p>
                <p>une sélection des livres que j'ai commis durant les deux dernières décennies</p>
            </div>
             <Livre
                className='livre'
                title='Accords'
                image={accords}
                imageAlt='accords'
                description="Comment représenter par écrit des pensées parallèles ? Comment faire en sorte que le lecteur puisse vivre cette expérience de lecture sur plusieurs plans simultanés ? Accords tente de répondre à ces questions avec une écriture sous forme de contrepoints et d'accords."
            />
            <Livre
                className='livre'
                title='Hexagerations'
                image={hexagerations}
                imageAlt='hexagerations'
                description="Un beau livre où une sélection de peintures façonnées avec le graphieros sont accompagnées par la traduction du texte en français."
            />
            <Livre
                className='livre'
                title="L'objet du désir"
                image={objedtDesir}
                imageAlt='objet du désir'
                description="Une pièce de théâtre en 3 actes, où le Sujet rencontre l'Objet du désir, sans cesse renouvelé."
            />
            <Livre
                className='livre'
                title='La clé'
                image={cle}
                imageAlt='La clé'
                description="Le manuel du graphieros, présentant les raisons de la création de cette idéolangue, les fondations de son architecture, les ressources grammaticales, phonologiques, et le lexique."
            />
        </div>
    )
}

export default Livres;