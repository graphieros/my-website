import React from 'react';
import './css/Livres.css';
import Livre from '../components/Livre';
import accords from '../assets/books/accords.png';

const Livres = () => {
    return(
        <div className="temp">
             <Livre
                className='livre'
                title='Accords'
                image={accords}
                imageAlt='accords'
                description="Comment représenter par écrit des pensées parallèles ? Comment faire en sorte que le lecteur puisse vivre cette expérience de lecture sur plusieurs plans simultanés ? Accords tente de répondre à ces questions avec une écriture sous forme de contrepoints et d'accords."
            />
        </div>
    )
}

export default Livres;