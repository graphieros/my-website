import React from 'react';
import Fractal from './graphieros/Fractal';
import '../css/Post.css';

const Post = (props) => {

    return (
        <div className='post-body'>
            <div className='post-title'>
                <Fractal
                    className='post-fractal'
                    svgSize='30'
                    sequence='qe-ed-dw-wq-qs-se'
                    colors={[75,106,160]}
                />
                {props.title}
            </div>
            <div className='post-idea'>
                {props.idea}
            </div>

        </div>
    )
}

export default Post;