import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Landing.css';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import Fractal from './graphieros/Fractal';
import Linear from './graphieros/Linear';
import Button from './Button';
import Footer from './Footer';

function Landing() {

    const glyphCount = graphieros_dictionnary.length;

    const [landSeqState, setLandSeqState] = useState({
        sequence: 'zw-wd-dz-qs-se-xs qz-ze-ed-dx-xw-wq zw-wd-dz-qs-se-xs qz-ze-ed-dx-xw-wq zw-wd-dz-qs-se-xs',
        fr:'',
        name:''
    });


    useEffect(() => {
        let i= 0;
        const interval = setInterval(() => {
            setLandSeqState({
                sequence:graphieros_dictionnary[i].fractal,
                fr: graphieros_dictionnary[i].fr,
                name: `[ ${graphieros_dictionnary[i].name.replace('_','')} ]`
            });
            i += 1;
            if(i === graphieros_dictionnary.length){
                i = 0;
            }
            return () => clearInterval(interval);
        },2000);
    },[])



    return (
        <div className='landing-body-wrapper'>
            <div className='landing-body'>
                <h1 className='wtf'><span className='greySpan'>Qu'est-ce que le</span> graphieros ?</h1>
                <div className='graphieros-presentation'>
                    Le graphieros est une <strong><a href="https://fr.wikipedia.org/wiki/Langue_construite#:~:text=Une%20langue%20construite%20ou%20planifi%C3%A9e,l'%C3%A9laboration%20est%20largement%20spontan%C3%A9e." target="_blank" rel="noopener noreferrer">idéolangue</a></strong>, créée par Alec Lloyd Probert à partir de 2016. Cette langue est fondée sur un corpus de <strong>{glyphCount}</strong> idéogrammes ou glyphes, dont l'aspect est déterminé par la géométrie de l'<strong>hexagone régulier</strong>, des sept points qui constituent ses sommets et son centre.
            </div>
            </div>
            <div className='graphieros-physics'>
                <Fractal
                    className='landing-fractal'
                    sequence={landSeqState.sequence}
                    colors={[75,106,160]}
                    svgSize='256'
                    light={false}
                />
                <p className='landing-trad'>{landSeqState.fr}<br/><span>{landSeqState.name}</span></p>
                <p>
                    L'hexagone fait partie des quelques formes géométriques avec lesquelles il est possible de construire un <strong>pavage régulier</strong>, comme celui de la surface externe des alvéoles bâties par les abeilles.
                </p>
                <div className='abeilles'>
                    <svg viewBox='0 0 300 300'>
                    <path d="M 60,55,80,89,60,124,20,124"/><path d="M 60,124,80,158,60,193"/><path d="M 80,89,120,89,140,55"/><path d="M 120,89,140,124,120,158,80,158"/><path d="M 140,124,180,124,200,89,180,55"/><path d="M 200,89,240,89,260,124,240,158,200,158,180,124"/><path d="M 120,158,140,193,180,193,200,158"/><path d="M 140,193,120,228,80,228"/><path d="M 120,228,140,262"/><path d="M 180,193,200,228"/><path d="M 260,124,300,124"/><path d="M 240,89,260,55"/>
                    </svg>
                </div>
            </div>
            <div className='graphieros-works'>
                <div>
                    <Linear
                        className='graphieros-works-linear'
                        sequence='mea-hea le-fmai kio-nsa-bdi'
                        size=''
                        colors={[75, 106, 160]}
                    />
                </div>
                <p>
                    <strong>Le graphieros s'écrit, se parle et se peint.</strong> Il se prête à la poésie, à la patience et à la philosophie. Avec {glyphCount} glyphes comme autant de briques conceptuelles fondamentales, le graphieros peut représenter les idées des plus simples aux plus complexes, comme des objets du quotidien aux machines technologiques les plus affûtées.
                </p>
            </div>
            <div className='landing-links'>
                <h1 className='wtf2'>Comment apprendre le <span className='blueSpan'>graphieros ?</span></h1>
                <p>Toutes les <strong>ressources</strong> sont disponibles gratuitement pour apprendre et pratiquer le graphieros:</p>
                <div className='landing-links-wrapper'>
                    <Link
                        className='link'
                        to='/cle.html'
                        target="_blank">
                        <Button
                            className='menu-button-landing'
                            fractalClassName='menu-fractal-landing'
                            colors={[211, 227, 252]}
                            sequence='zw-ws-qd-dx'
                            svgSize='60'
                            pClass='button-label-landing'
                            label='la clé'
                        />
                    </Link>
                    <div className='button-description-right'>
                        Le manuel du graphieros en ligne
                    </div>
                    <div className='button-description-left'>
                        L'éditeur de graphieros en ligne
                    </div>
                    <a href='https://graphieros.com/touch_writer/touch_writer.html' target='_blank' rel='noopener noreferrer'>
                        <Button
                            className='menu-button-landing'
                            fractalClassName='menu-fractal-landing'
                            colors={[211, 227, 252]}
                            sequence='qd-zs-sw'
                            svgSize='60'
                            pClass='button-label-landing'
                            label='touch writer'
                        />
                    </a>
                    <Link
                        className='link'
                        to='/fractalspace'>
                        <Button
                            className='menu-button-landing'
                            fractalClassName='menu-fractal-landing'
                            colors={[211, 227, 252]}
                            sequence='ss ss ss ss ss'
                            svgSize='60'
                            pClass='button-label-landing'
                            label='fractal space'
                        />
                    </Link>
                    <div className='button-description-right'>
                        Ecrire en profondeur en graphieros fractal
                    </div>
                    <div className='button-description-left'>
                        La section graphieroPhone, pour les experts
                    </div>
                    <Link
                        className='link'
                        to='/kio'>
                        <Button
                            className='menu-button-landing'
                            fractalClassName='menu-fractal-landing'
                            colors={[211, 227, 252]}
                            sequence='zw-wx-xe-ez-zq-qd-de zq-qw-ws-sx-xd-de'
                            svgSize='60'
                            pClass='button-label-landing'
                            label='[ kio ]'
                        />
                    </Link>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing;
