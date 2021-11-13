import React from "react";

import './post.styles.scss';

const Post = ({post}) => (
    <div className='post-container'>
        <span className='post-title'>{post.title}</span>
        <p className='post-content'>{post.body}</p>
    </div>
)

export default Post;