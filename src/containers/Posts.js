import React from 'react';
import { connect } from 'react-redux';
import { requestPosts } from '../store/actions/posts-actions';
import PostsList from '../components/PostsList';
import Spinner from '../components/Spinner';

import history from '../history';

class Posts extends React.Component {
  state = {}
  
  componentDidMount() {
    this.props.requestPosts();
  }

  openSinglePost = (postId) => {
    localStorage.setItem('postId', postId);
    history.push(`/post:${postId}`);
  }

  render() {
    const { allPosts } = this.props;
    return (
      <div>
        {
          allPosts.length === 0
          ?
          <Spinner />
          :
          <PostsList 
            allPosts={allPosts}
            openSinglePost={this.openSinglePost}
          />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allPosts: state.postsReducer.allPosts,
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);