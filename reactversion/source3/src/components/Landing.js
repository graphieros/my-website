import React from 'react';
import { Link } from 'react-router-dom';
import './css/Landing.css';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import Fractal from './graphieros/Fractal';
import Linear from './graphieros/Linear';
import Button from './Button';
import Footer from './Footer';

function Landing() {

    const glyphCount = graphieros_dictionnary.length;

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
                    sequence='zx-qe-wd qw-we xq-xs-sw-wd-ze zw-wd-dz-qs-se-xs'
                    colors={[122, 161, 216]}
                    svgSize='256'
                    light={false}
                />
                <p>
                    L'hexagone fait partie des quelques formes géométriques avec lesquelles il est possible de construire un <strong>pavage régulier</strong>, comme celui de la surface externe des alvéoles bâties par les abeilles.
                </p>
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
