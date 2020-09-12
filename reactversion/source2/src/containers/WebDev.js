import React from 'react';
import './css/WebDev.css';
import touchWriterDemo from '../assets/video/touchWriterDemo.mp4';
import yohannLaveant from '../assets/video/yohannLaveant.mp4';

const WebDev = () => {
    return (
        <div className='webDev'>

            <div className='videoWrapper'>
            <video
                controls
                className='videos'
                src={yohannLaveant} />
            <br />
            <p>J'ai construit le site web officiel du comédien Yohann Lavéant</p>
            <br />
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://yohannlaveant.com'>
                    VISITER
            </a>
            </div>  

            <div className='videoWrapper'>
            <video
                controls
                className='videos'
                src={touchWriterDemo} />
            <br />
            <p>J'ai créé cet éditeur, qui permet de composer des textes en graphieros</p>
            <br />
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://graphieros.com/touch_writer/touch_writer.html'>
                    VISITER
            </a>
            </div>  
            <a
                className='webContact'
                target="_blank"
                rel="noopener noreferrer"
                href="https://graphieros.com/contact.php">
                    CONTACT
            </a>


        </div>
    )
}

export default WebDev;