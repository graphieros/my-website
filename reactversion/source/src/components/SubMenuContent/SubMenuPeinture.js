import React, { useState } from 'react';
import './SubMenuPeinture.css';
import apresDemain from '../../assets/apresDemain.jpg';
import sousLeMasque from '../../assets/sousLeMasque.jpg';
import parler from '../../assets/parler.jpg';
import socrate from '../../assets/socrate.jpg';
import oeil from '../../assets/oeil.jpg';
import socrate2 from '../../assets/socrate2.png';
import envol from '../../assets/envol.jpg';
import chat_small from '../../assets/chat_small.jpg';
import manifeste from '../../assets/manifeste.jpg';
import origin from '../../assets/origin.jpg';
import origin_1 from '../../assets/origin_1.jpg';
import atome from '../../assets/atome.jpg';

const SubMenuPeinture = () => {

    const galleryCollection = [
        {
            pic: apresDemain,
            tit: 'Entendre',
            des: 'Huile sur toile<br>65 x 46 cm<br>2020<br>confinement'
        }, 
        {
            pic: sousLeMasque,
            tit: 'Voir',
            des: 'Huile sur toile<br>81 x 60 cm<br>2020<br>confinement'
        }, 
        {
            pic: parler,
            tit: 'Parler',
            des: 'Huile sur toile<br>65 x 54 cm<br>2020<br>confinement'
        }, 
        {
            pic: socrate,
            tit: 'Socrate',
            des: 'Huile sur toile<br>40 x 40 cm<br>2018'
        }, 
        {
            pic: oeil,
            tit: 'La caresse des galaxies lointaines',
            des: 'Huile sur toile<br>116 x 81 cm<br>2018'
        }, 
        {
            pic: socrate2,
            tit: 'Socrate',
            des: 'Huile sur toile<br>40 x 40 cm<br>2019'
        }, 
        {
            pic: envol,
            tit: "L'envol",
            des: 'Huile sur toile<br>30 x 30 cm<br>2018'
        }, 
        {
            pic: chat_small,
            tit: 'Elle parle',
            des: 'Huile sur toile<br>30 x 30 cm<br>2018'
        }, 
        {
            pic: manifeste,
            tit: 'Manifeste',
            des: 'huile sur toile<br>80 x 80 cm<br>2018'
        },
        {
            pic: origin,
            tit: 'Origin_0',
            des: 'Huile sur toile<br>20 x 20 cm<br>2019'
        },
        {
            pic: origin_1,
            tit: 'Origin_1',
            des: 'Huile sur toile<br>55 x 33 cm<br>2019'
        },
        {
            pic: atome,
            tit: 'Atome_0',
            des: 'Huile sur toile<br>90 x 30 cm<br>2019'
        }
    ];

    const picArray = [];
    const titArray = [];
    const desArray = [];

    const [galleryShowState, setGalleryShowState] = useState(0);

    const [titState, setTitState] = useState(0);

    const [desState, setDesState] = useState({
        content: <span><span className="galleryPresentation">Galerie</span>Sélection de tableaux récents<br/>Cliquez pour agrandir &#x1F59D;</span>
    });

    const galleryShowHandler = (i) =>{
        setGalleryShowState({
            content: <span>{picArray[i]}</span>
        });
        setTitState({
            content: <p>{titArray[i]}</p> 
        });
        setDesState({
            content: <span dangerouslySetInnerHTML={{__html:desArray[i]}}/>
        })
    }

    return (
        <div>
            <div className="galleryScroll">
                {galleryCollection.map(function(collection, i){
                    picArray.push(<img key={i} src={collection.pic} alt="gallerie" />);
                    titArray.push(collection.tit);
                    desArray.push(collection.des);
                    return <img key={i} src={collection.pic} alt="gallerie" onClick={() => galleryShowHandler(i)}/>
                })}
            </div>
            
            <div className="galleryShow">
                {galleryShowState.content}
                <div className="paintingTitle">
                    {titState.content}<br />
                    {desState.content}
            </div>
            </div>

        </div>
    )
}

export default SubMenuPeinture;