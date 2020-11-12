import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Landing.css';
import { graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import Fractal from './graphieros/Fractal';
import Linear from './graphieros/Linear';
import Button from './Button';
import KioIdea from './graphieros_subsite/KioIdea';
import './graphieros_subsite/css/KioIdea.css';
import ideas_library from './graphieros_subsite/subsite_library/ideas_library.json';
import Footer from './Footer';


function Landing() {

    const randomHaiku = Math.floor(Math.random()*ideas_library.length);

    const glyphCount = graphieros_dictionnary.length;

    const [haikuState, setHaikuState] = useState({
        rand: randomHaiku
    });

    const handleNewHaiku = () => {
        setHaikuState({
            rand:randomHaiku
        });
    }

    const [landSeqState, setLandSeqState] = useState({
        sequence: 'xq-qz-zw-wd-ds qw-we zx-qe-wd zx-ws-qe-ez-zq-qw-wx-xd-ds qw-zs-ed',
        fr: 'bonjour !',
        name: '[ kli-keo mea-kadwa ! ]'
    });


    useEffect(() => {

        let i = Math.floor(Math.random() * graphieros_dictionnary.length);
        const interval = setInterval(() => {
            setLandSeqState({
                sequence: graphieros_dictionnary[i].fractal,
                fr: graphieros_dictionnary[i].fr,
                name: `[ ${graphieros_dictionnary[i].name.replace('_', '')} ]`
            });
            i = Math.floor(Math.random() * graphieros_dictionnary.length);
            if (i === graphieros_dictionnary.length) {
                i = 0;
            }
            return () => clearInterval(interval);
        }, 1618);
    }, [])



    return (
        <div className='landing-body-wrapper'>
            <div className='landing-body'>
                <h1 className='wtf'><span className='greySpan'>Qu'est-ce que le</span> graphieros ?</h1>
                <div className='graphieros-presentation'>
                    Le graphieros est une <span className='inLink'><a href="https://fr.wikipedia.org/wiki/Langue_construite#:~:text=Une%20langue%20construite%20ou%20planifi%C3%A9e,l'%C3%A9laboration%20est%20largement%20spontan%C3%A9e." target="_blank" rel="noopener noreferrer">idéolangue</a></span>, créée par <span className='inLink'><Link to='/alp'>Alec Lloyd Probert</Link></span> à partir de 2016. Cette langue est fondée sur un corpus de <Link to='/glyphes'><span className='inLink'>{glyphCount} idéogrammes</span></Link> ou glyphes, dont l'aspect est déterminé par la géométrie de l'<strong>hexagone régulier</strong>, des sept points qui constituent ses sommets et son centre.
            </div>
            </div>
            <div className='graphieros-physics'>
                <Fractal
                    className='landing-fractal'
                    sequence={landSeqState.sequence}
                    colors={[75, 106, 160]}
                    svgSize='256'
                    light={false}
                />
                <p className='landing-trad'>{landSeqState.fr}<br /><span>{landSeqState.name}</span></p>
                <p> 
                    L'hexagone fait partie des quelques formes géométriques avec lesquelles il est possible de construire un <strong>pavage régulier</strong>, comme celui de la surface externe des alvéoles bâties par les abeilles.
                </p>
                <div className='abeilles'>
                    <svg className='abeilles-svg' viewBox='0 0 500 450'>
                    <path d="M 40,20,80,89,40,158,80,228,40,297" /><path d="M 80,89,160,89,200,20" /><path d="M 160,89,200,158,280,158,320,228,400,228,440,297" /><path d="M 200,158,160,228,80,228" /><path d="M 280,158,320,89" /><path d="M 400,228,440,158,400,89,320,89,280,20" /><path d="M 400,89,440,20" /><path d="M 160,228,200,297,280,297,320,228" /><path d="M 200,297,160,366,80,366" /><path d="M 160,366,200,435" /><path d="M 280,297,320,366" /><path d="M 520,158,440,158" /><path className='ka' d="M 220,193,260,262" /><path className='ka' d="M 220,262,240,228" /><path className='ka' d="M 200,228,260,193" /><path className='ka' d="M 280,228,280,228" /><path className='hea' d="M 100,124,100,193,160,158,100,124"/><path className='hea' d="M 80,158,120,158,140,124"/><path className='hea' d="M 140,193,120,158"/><path className='snoi' d="M 340,124,380,124,400,158"/><path className='snoi' d="M 320,158,380,124,380,193"/><path className='snoi' d="M 340,193,380,124"/>
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
                    <strong>Le graphieros s'écrit, se parle et se peint.</strong> Il se prête à la poésie, à la patience et à la philosophie. Avec <Link to='/glyphes'><span className='inLink'>{glyphCount} glyphes</span></Link> comme autant de briques conceptuelles fondamentales, le graphieros peut représenter les idées des plus simples aux plus complexes, comme des objets du quotidien aux machines technologiques les plus affûtées.
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
            <div className='haiku-today'>
                <p>...un poème pseudo-aléatoire</p>
                    <KioIdea
                        className='kio-idea'
                        frac_class='kio-idea-frac-landing'
                        frac_sequence={ideas_library[haikuState.rand].frac_sequence}
                        frac_svgSize='100'
                        frac_size='30'
                        frac_colors={[75, 106, 160]}
                        frac_dropShadow='0px 0px 3px rgba(255,255,255,0.6)'
                        frac_light={true}
                        molecule_set={ideas_library[haikuState.rand].molecules}
                    />
                <div className='haiku-translation'>
                    {ideas_library[haikuState.rand].translation.map((tr,i)=> <p key={`trans_${i}`}>{tr}</p>)}
                </div>

                <button className='other-haiku' onClick={handleNewHaiku}>un autre?</button>
                        

                </div>
            <Footer />
        </div>
    )
}

export default Landing;
