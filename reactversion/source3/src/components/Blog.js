import React from 'react';
import posts from '../libraries/posts.json';
import './css/Blog.css';
import Thought from './Thought';

function Blog() {

    const postCount = posts.length;
    // const col = () => {
    //     let rand = Math.floor(Math.random()*255);
    //     return rand;
    // };

    // const randomGlyph = () => {
    //     let segments = ['ze','ed','dx','xw','wq','qz','zx','we','qd','zd','dw','qe','wd'];
    //     let randomNum = Math.floor(Math.random()*segments.length);
    //     let finalSelect = [];

    //     for(let i = 0; i < randomNum; i += 1) {
    //         let randomSelect = Math.floor(Math.random()*segments.length);
    //         finalSelect.push(segments[randomSelect]);
    //     }
    //     return `${finalSelect.toString().replaceAll(',','-')}`;
    // }

    return (
        <div className='blog-body'>
            <div className='blog-title'>
                Blog
                <p>des pensées en passant</p>
                <p className='post-count'>{`{ ${postCount} articles }`}</p>
            </div>
            {posts.map((post, i) => <Thought
                key={`post_${i}`}
                title={post.title}
                date={post.date}
                sequence='qw-wd-de-es-sq-qe'
                colors={[255,255,255]}
                text={post.idea}
            />)}
        </div>
    )
}

export default Blog;
