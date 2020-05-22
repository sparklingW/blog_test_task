import * as consts from '../consts';

const initialState = {
  allPosts: [],
  onePost: [],
  postId: '',
  requestError: '',
  commentBody: '',
};

const postsReducer = (state = initialState, action) => {
  switch(action.type) {
    case consts.REQUEST_POSTS_SUCCESS: 
      return {
        ...state,
        allPosts: action.payload,
      };
    case consts.REQUEST_POSTS_ERROR: 
      return {
        ...state,
        requestError: action.payload,
    };
    case consts.REQUEST_SINGLE_POST: 
      return {
        ...state,
        postId: action.postId,
      }
    case consts.REQUEST_SINGLE_POST_SUCCESS:
      return {
        ...state,
        onePost: action.payload,
      };
    case consts.REQUEST_SINGLE_POST_ERROR:
      return {
        ...state,
        requestError: action.payload,
      };
    case consts.REQUEST_CREATE_COMMENT:
      return {
        ...state,
        postId: action.payload.postId,
        commentBody: action.payload.commentBody,
      };
    case consts.REQUEST_CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        // postId: action.payload.postId,
        // commentBody: action.payload.commentBody,
      };
    case consts.REQUEST_CREATE_COMMENT_ERROR:
      return {
        ...state,
        // postId: action.payload.postId,
        // commentBody: action.payload.commentBody,
      };
    default:
      return {
        ...state,
      }
  }
}

export default postsReducer;