import React, {useState} from 'react';
import Fractal from './graphieros/Fractal';
import '../css/Post.css';

const Post = (props) => {

    const [ideaState, setIdeaState] = useState({
        className:'hidden'
    });

    const [ arrowState, setArrowState] = useState({
        className:'hidden'
    });

    const handleShowIdea = () => {
        setIdeaState({
            className:'post-idea'
        });
        setArrowState({
            className:'post-reduce'
        });
    }

    const handleShowReduce = () => {
        setIdeaState({
            className:'hidden'
        });
        setArrowState({
            className:'hidden'
        });
    }

    const randomGlyph = () => {
        let segments = ['ze','ed','dx','xw','wq','qz','zx','we','qd','zd','dw','qe','wd'];
        let randomNum = Math.floor(Math.random()*segments.length);
        let finalSelect = [];
        console.log({randomNum})

        for(let i = 0; i < randomNum; i += 1) {
            let randomSelect = Math.floor(Math.random()*segments.length);
            finalSelect.push(segments[randomSelect]);
        }
        return `${finalSelect.toString().replaceAll(',','-')}`;
    }

    console.log(randomGlyph());

    return (
        <div className='post-body'>
            <div className='post-title' onClick={handleShowIdea}>
                <Fractal
                    className='post-fractal'
                    svgSize='30'
                    sequence={`${randomGlyph()} ${randomGlyph()} ${randomGlyph()}`}
                    colors={[75,106,160]}
                />
                {props.title}
            </div>
            <div className='post-date'>
                {props.date}
            </div>
            
            <div className={ideaState.className}>
                {props.idea}
            </div>
            <div className={arrowState.className} onClick={handleShowReduce}></div>

        </div>
    )
}

export default Post;