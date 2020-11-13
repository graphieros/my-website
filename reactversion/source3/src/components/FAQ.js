import React, { useEffect } from 'react';
import './css/FAQ.css';
import FAQ_searchWord from '../assets/FAQ_searchWord.mp4';
import FAQ_searchPhono from '../assets/FAQ_searchPhono.mp4';
import FAQ_searchWordPhono from '../assets/FAQ_searchWordPhono.mp4';
import FAQ_draw from '../assets/FAQ_draw.mp4';
import FAQ_searchShape from '../assets/FAQ_seachShape.mp4';
import FAQ_constEditor from '../assets/FAQ_constEditor.mp4';
import FAQ_paragraph from '../assets/FAQ_paragraph.mp4';
import FAQ_space from '../assets/FAQ_space.mp4';

const FAQ = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <div className='FAQ-body'>
                <p>
                    comment utiliser <br /><span className='FAQ-highlight'>Graphieros.com</span>
                </p>
                <div className="FAQ-title-deco" />


                <div className='FAQ-questions'>
                    <div className="FAQ-question-left">
                        Je cherche la <span className='question-light'>traduction graphieros</span> d'un mot en français...
                    </div>

                    <div className='video-wrapper-right'>
                        <video className='FAQ-video' src={FAQ_searchWord} controls/>
                    </div>

                    <div className="FAQ-question-right">
                        Je cherche la <span className='question-light'>traduction en français</span> d'un glyphe par sa phonologie...
                    </div>

                    <div className='video-wrapper-left'>
                        <video className='FAQ-video' src={FAQ_searchPhono} controls/>
                    </div>

                    <div className="FAQ-question-left">
                        Je cherche la <span className='question-light'>traduction en français</span> d'un mot composé de plusieurs glyphes...
                    </div>

                    <div className='video-wrapper-left'>
                        <video className='FAQ-video' src={FAQ_searchWordPhono} controls/>
                    </div>

                    <div className="FAQ-question-right">
                        Je cherche un glyphe <span className='question-light'>en dessinant sa forme...</span>
                    </div>

                    <div className='video-wrapper-left'>
                        <video className='FAQ-video' src={FAQ_draw} controls/>
                    </div>

                    <div className="FAQ-question-left">
                        Je cherche un glyphe <span className='question-light'>d'après la forme</span> qui lui ressemble...
                    </div>

                    <div className='video-wrapper-left'>
                        <video className='FAQ-video' src={FAQ_searchShape} controls/>
                    </div>

                    <div className="FAQ-question-right">
                        A quoi sert ce <span className='question-light'>curseur clignotant</span> en bas à gauche ?
                    </div>

                    <div className='video-wrapper-left'>
                        <video className='FAQ-video' src={FAQ_constEditor} controls/>
                    </div>

                    <div className="FAQ-question-left">
                        Voici comment écrire tout un  <span className='question-light'>paragraphe</span> en graphieros...
                    </div>

                    <div className='video-wrapper-left'>
                        <video className='FAQ-video' src={FAQ_paragraph} controls/>
                    </div>

                    <div className="FAQ-question-right">
                        Comment écrire dans le sens de <span className='question-light'>la profondeur</span> ?
                    </div>

                    <div className='video-wrapper-left'>
                        <video className='FAQ-video' src={FAQ_space} controls/>
                    </div>
                </div>

            </div>

        </>
    )
}

export default FAQ;
