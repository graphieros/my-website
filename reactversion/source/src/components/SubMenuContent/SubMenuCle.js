import React from 'react';
import Fractal from '../Fractal/Fractal';
import zoomin from '../../assets/zoomin.mp4';
import './SubMenuCle.css';

const SubMenuCle = (props) => {

    return (
        <div className={props.className}>

            <Fractal
                className='fractalCle'
                sequence='zw-qd-dx-sw'
                colors={[255, 99, 71]}
                svgSize=""

            />
            <div className='clePresentation'>
                <strong>Qu'est-ce que le graphieros?</strong>
                <p>
                    Le graphieros est une idéolangue (une langue artistique), que j'ai créée pour pouvoir peindre et écrire simultanément.
                </p>
                <p className='cleRed'>
                    Le graphieros est composé d'un corpus de 450 idéogrammes.
                </p>
                <p>
                    En combinant les idéogrammes, toutes les idées peuvent être représentées.
                </p>
                <p>
                    Les idéogrammes sont formés d'après la géométrie de l'hexagone. Les textes peuvent donc être inscrits dans une grille hexagonale.
                </p>
                <p className="cleRed">
                    Le graphieros se parle...
                </p>

                <br />
                <a target="_blank" rel="noopener noreferrer" href="https://graphieros.com/cle.html">
                    <button className="cleLink">trouver la clé</button>
                </a>
            </div>

            <div className="videoWrapper">
                <video controls>
                    <source src={zoomin} type="video/mp4" />
                </video>
            </div>

        </div>
    )
}

export default SubMenuCle;