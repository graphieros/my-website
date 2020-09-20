import React from 'react';
import Post from '../components/Post';
import './css/Blog.css';
import posts from '../libraries/posts.json';

const Blog = () => {

    const postList = [];
    posts.forEach((post, i) => {
        postList.push(
            <Post
                key={`post_${i}`}
                title={post.title} 
                date={post.date}
                idea={post.idea} 
            />
        );
    });


    return(
        <div className='blog-body'>
            {postList}
        </div>
    )
}

export default Blog;