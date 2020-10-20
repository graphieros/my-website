import React from 'react';
import posts from '../libraries/posts.json';
import './css/Blog.css';
import Thought from './Thought';
import Fractal from './graphieros/Fractal';

function Blog() {

    const postCount = posts.length;

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
                colors={[255,255,255]}
                text={post.idea}
            />)}
        </div>
    )
}

export default Blog;
