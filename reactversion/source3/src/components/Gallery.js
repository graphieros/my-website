import React, { useState } from 'react';
import './css/Gallery.css';

import entendre from '../assets/entendre.jpg';
import chat_small from '../assets/chat_small.jpg';
import envol from '../assets/envol.jpg';
import fil from '../assets/fil.jpg';
import ile from '../assets/ile.jpg';
import Kcode from '../assets/Kcode.jpg';
import manifeste from '../assets/manifeste.jpg';
import oeil from '../assets/oeil.jpg';
import origin from '../assets/origin.jpg';
import origin_1 from '../assets/origin_1.jpg';
import parler from '../assets/parler.jpg';
import socrate from '../assets/socrate.jpg';
import socrate2 from '../assets/socrate2.png';
import voir from '../assets/voir.jpg';
import vanite from '../assets/vanite.jpg';
import parle from '../assets/parle.jpg';
import euprattein from '../assets/euprattein.jpg';


function Gallery() {

    const assets = [
        {
            pic: entendre,
            title: 'Entendre',
            media: 'Huile sur toile',
            size: '65 x 46 cm',
            year: '2020',
            descr: 'confinement',
        },
        {
            pic: chat_small,
            title: 'Elle parle',
            media: 'Huile sur toile',
            size: '30 x 30 cm',
            year: '2018',
            descr: '',
        },
        {
            pic: envol,
            title: "L'envol",
            media: 'Huile sur toile',
            size: '30 x 30 cm',
            year: '2018',
            descr: '',
        },
        {
            pic: fil,
            title: 'Le fil',
            media: 'Huile sur toile',
            size: '40 x 40 cm',
            year: '2018',
            descr: '',
        },
        {
            pic: ile,
            title: "L'île bienheureuse",
            media: 'Huile sur toile',
            size: "81 x 65 cm",
            year: '2018',
            descr: '',
        },
        {
            pic: Kcode,
            title: 'K-code',
            media: 'Huile sur toile',
            size: '65 x 54 cm',
            year: '2017',
            descr: '',
        },
        {
            pic: manifeste,
            title: 'Manifeste',
            media: 'Huile sur toile',
            size: '80 x 80 cm',
            year: '2018',
            descr: '',
        },
        {
            pic: oeil,
            title: 'La caresse des galaxies lointaines',
            media: 'Huile sur toile',
            size: '116 x 81 cm',
            year: '2018',
            descr: '',
        },
        {
            pic: origin,
            title: 'Origin_0',
            media: 'Huile sur toile',
            size: '20 x 20 cm',
            year: '2019',
            descr: '',
        },
        {
            pic: origin_1,
            title: 'Origin_1',
            media: 'Huile sur toile',
            size: '55 x 33 cm',
            year: '2019',
            descr: '',
        },
        {
            pic: parler,
            title: 'Parler',
            media: 'Huile sur toile',
            size: '65 x 54 cm',
            year: '2020',
            descr: 'confinement',
        },
        {
            pic: socrate,
            title: 'Socrate',
            media: 'Huile sur toile',
            size: '40 x 40 cm',
            year: '2018',
            descr: '',
        },
        {
            pic: socrate2,
            title: 'Socrate',
            media: 'Huile sur toile',
            size: '30 x 30 cm',
            year: '2019',
            descr: '',
        },
        {
            pic: voir,
            title: 'Voir',
            media: 'Huile sur toile',
            size: '81 x 60 cm',
            year: '2020',
            descr: 'confinement',
        },
        {
            pic: vanite,
            title: 'Vanité',
            media: 'Huile sur toile',
            size: '60 x 20 cm',
            year: '2018',
            descr: ''
        },
        {
            pic: parle,
            title: 'Elle parle',
            media: 'Huile sur toile',
            size: '20 x 20 cm',
            year: '2018',
            descr: ''
        },
        {
            pic: euprattein,
            title: 'eu prattein',
            media: 'Huile sur toile',
            size: '65 x 54 cm',
            year: '2014',
            descr: ''
        },
    ];

    const style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${assets.length},1fr)`
    }

    const [ showState, setShowState] = useState({
        content: '',
        message: <p className='show-message'>Cliquez sur une image pour voir les détails</p>
    });

    const handleShow = (i) => {
        setShowState({
            message:'',
            content: <img 
                src={assets[i].pic}
                alt={assets[i].title}
                />,
            title: <p className='show-title'>{assets[i].title}</p>,
            description: <p className='show-description'>
                {assets[i].media}
                <br/>
                {assets[i].size}
                <br/>
                {assets[i].year}
            </p>
        });
    }

    return (
        <div className='gallery-body'>
            <div className='gallery-title'>
                galerie de peintures
                <p>écrire et peindre simultanément</p>
            </div>
            <div className='gallery-carousel' style={style}>
                {assets.map((asset, i) => <img
                    className='gallery-pic'
                    key={i} src={asset.pic}
                    alt={asset.title}
                    onClick={() => handleShow(i)} />)}
            </div>
            <div className='gallery-show'>
                {showState.message}
                {showState.content}
                {showState.title}
                {showState.description}
            </div>
        </div>
    )
}

export default Gallery;
