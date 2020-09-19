import React from 'react';
import Post from '../components/Post';
import './css/Blog.css';
import posts from '../libraries/posts.json';

const Blog = () => {

    const postList = [];
    posts.forEach(post => {
        postList.push(
            <Post title={post.title} idea={post.idea} />
        );
    });


    return(
        <div className='blog-body'>
            {postList}
        </div>
    )
}

export default Blog;