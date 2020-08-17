import React from 'react';
import './SubMenuWeb.css';
import screenShotYL from '../../assets/screenShotYL.png';
import screenShotCM from '../../assets/screenShotCM.png';
import touchWriterDemo from '../../assets/touchWriterDemo.mp4';

const SubMenuWeb = () => {

    const playVideo = (props) => {
        props.target.play();
    }

    const stopVideo = (props) => {
        props.target.pause();
    }

    return (

        <div>
            <div className="webTitle">Web dev.<br/>
            <span>Porfolio</span>
            </div>
            <div className="webShow">
                <div>
                    <img src={screenShotYL} alt="Yohann Lavéant" />
                </div>
                <div>
                    <img src={screenShotCM} alt="Business Analyse" />
                </div>
                <div>
                    <video data-play="hover" muted="muted" src={touchWriterDemo} type="video/mp4" onMouseEnter={playVideo} onMouseLeave={stopVideo}/>
                </div>
            </div>
        </div>

    )
}

export default SubMenuWeb;