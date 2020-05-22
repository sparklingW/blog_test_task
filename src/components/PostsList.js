import React from 'react';
import PostElement from './PostElement';

const PostsList = ({allPosts, openSinglePost}) => (
  <div>
    {
      allPosts.map((el) => (
        <PostElement 
          key={el.id}
          postId={el.id}
          title={el.title}
          body={el.body}
          openSinglePost={openSinglePost}
        />
      ))
    }
  </div>
);

export default PostsList;