import React from 'react';
import '../App.css';

const PostElement = ({postId, title, body, openSinglePost}) => (
  <div className='post_element'>
    <div className='title'>Title: {title}</div>
    <div className='body'>Body: {body}</div>
    <button onClick={() => openSinglePost(postId)}>Open Post</button>
  </div>
);

export default PostElement;