import React from 'react';
import { connect } from 'react-redux';
import { requestOnePost, requestCreateComment } from '../store/actions/posts-actions';
import Spinner from '../components/Spinner';
import '../App.css';
import history from '../history';

class SinglePost extends React.Component {
  state = {
    commentBody: '',
  };

  componentDidMount() {
    this.props.requestOnePost(localStorage.getItem('postId'));
  }

  handleInput = ({ target: { value } }) => this.setState({ commentBody: value });

  handleSendComment = () => this.props.requestCreateComment({ postId: localStorage.getItem('postId') , commentBody: this.state.commentBody })

  render() {
    const { onePost } = this.props;
    return (
      <div>
        {
          onePost !== undefined 
          ?
          <div className='single_post'>
            <div onClick={() => history.push('/')} style={{cursor: 'pointer'}}>Return to all posts</div>
            <div className='single_post_title'>{onePost.title}</div>
            <div className='single_post_body'>{onePost.body}</div>
            <div className='comments_section'>
              {
                onePost.comments !== undefined 
                &&
                onePost.comments.map((el) => (
                  <div key={el.id} className='single_comment'>
                    {el.body}
                  </div>
                ))
              }
              <div className='left_comment'>
              <input 
                type='text'
                placeholder='Input comment'
                value={this.state.commentBody}
                onChange={(e) => this.handleInput(e)}
              />
              <button className='btn' onClick={this.handleSendComment}>Send</button>
            </div>
            </div>
          </div>
          :
          <Spinner />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  onePost: state.postsReducer.onePost,
});

const mapDispatchToProps = (dispatch) => ({
  requestOnePost: (postId) => dispatch(requestOnePost(postId)),
  requestCreateComment: (payload) => dispatch(requestCreateComment(payload)),
});

export default connect(mapStateToProps,mapDispatchToProps)(SinglePost);