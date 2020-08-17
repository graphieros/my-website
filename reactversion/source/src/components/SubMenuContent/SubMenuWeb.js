import React, { useState } from 'react';
import './SubMenuWeb.css';
import yohannLaveant from '../../assets/yohannLaveant.mp4';
import ka from '../../assets/ka.mp4';
import touchWriterDemo from '../../assets/touchWriterDemo.mp4';

const SubMenuWeb = () => {

    const webCollection = [
        {
            video: yohannLaveant,
            descr: "Le site officiel du comédien Yohann Lavéant, réalisé en Vanilla JS.",
            link: "https://yohannlaveant.com"
        },
        {
            video: touchWriterDemo,
            descr: "Un éditeur pour la langue graphieros, programmé en Vanilla JS",
            link: "https://graphieros.com/touch_writer/touch_writer.html"
        },
        {
            video: ka,
            descr: "Mes débuts avec Javascript pour interagir en SVG", //description clairement à améliorer...
            link: "#"
        },
    ];

    let videoArray = [];
    let descrArray = [];
    let linkArray = [];

    const playVideo = (props) => {
        let index = props.target.id.replace("vid", ""); //this looks like a hack
        props.target.currentTime = 3;
        let playPromise = props.target.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
            });
        }

        webTell(index);
    }

    const [webTellState, setWebTellState] = useState({
        className: 'webTellOff'
    });

    const webTell = (index) => {
        console.log(linkArray[index])
        setWebTellState({
            className: 'webTellOn',
            content: descrArray[index],
            siteLink: linkArray[index]
        });
    }

    return (

        <div>
            <div className="webTitle">Web dev.<br />
                <span>Porfolio</span>
                <div className={webTellState.className}>{webTellState.content}
                </div>
                <div className="webSiteLink" onClick={() => console.log(webTellState.siteLink)}>
                    <a className="webLink" target="_blank" rel="noopener noreferrer" href={webTellState.siteLink}>VISITER</a>
                </div>
            </div>
            <div className="webShow">
                {webCollection.map(function (collection, i) {
                    videoArray.push(collection.video);
                    descrArray.push(collection.descr);
                    linkArray.push(collection.link);
                    return <video key={i}
                        id={`vid${i}`}
                        data-play="hover"
                        muted="muted"
                        src={collection.video}
                        onMouseEnter={playVideo} />
                })}

            </div>
        </div>

    )
}

export default SubMenuWeb;