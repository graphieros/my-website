import React, { useState } from 'react';
import './css/Galerie.css';

import entendre from '../assets/galeriePics/entendre.jpg';
import chat_small from '../assets/galeriePics/chat_small.jpg';
import envol from '../assets/galeriePics/envol.jpg';
import fil from '../assets/galeriePics/fil.jpg';
import ile from '../assets/galeriePics/ile.jpg';
import Kcode from '../assets/galeriePics/Kcode.jpg';
import manifeste from '../assets/galeriePics/manifeste.jpg';
import oeil from '../assets/galeriePics/oeil.jpg';
import origin from '../assets/galeriePics/origin.jpg';
import origin_1 from '../assets/galeriePics/origin_1.jpg';
import parler from '../assets/galeriePics/parler.jpg';
import socrate from '../assets/galeriePics/socrate.jpg';
import socrate2 from '../assets/galeriePics/socrate2.png';
import voir from '../assets/galeriePics/voir.jpg';
import vanite from '../assets/galeriePics/vanite.jpg';

const Galerie = () => {

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
    ]

    const temp_pics = [];
    const temp_titles = [];
    const temp_media = [];
    const temp_sizes = [];
    const temp_years = [];
    const temp_descr = [];

    const [galleryShowState, setGalleryShowState] = useState({
        content: <span><img src={origin_1} alt="startPic" /></span>
    });

    const [titleState, setTitleState] = useState({
        content: <p>Galerie</p>
    });
    const [infoState, setInfoState] = useState('');

    const handleShow = (i) => {
        setGalleryShowState({
            content: <span>{temp_pics[i]}</span>
        });
        setTitleState({
            content: <p>{temp_titles[i]}</p>
        });
        setInfoState({
            content:
                <React.Fragment>
                    <span>
                        {temp_media[i]}
                        <br />
                        {temp_sizes[i]}
                        <br />
                        {temp_years[i]}
                        <br />
                        {temp_descr[i]}
                    </span>
                </React.Fragment>
        });
    }

    return (
        <div>

            <div className='galleryScroll'>
                {assets.map(function (asset, i) {
                    temp_pics.push(<img key={i} src={asset.pic} alt="gallerie" />);
                    temp_titles.push(asset.title);
                    temp_media.push(asset.media);
                    temp_sizes.push(asset.size);
                    temp_years.push(asset.year);
                    temp_descr.push(asset.descr);
                    return <img
                        key={i}
                        src={asset.pic}
                        alt="gallerie"
                        onClick={() => handleShow(i)} />
                })}
            </div>

            <div className="galleryShow">
                {galleryShowState.content}
            </div>
            <div className="paintingTitle">
                {titleState.content}
                <br />
                {infoState.content}
            </div>

        </div>
    )
}

export default Galerie;