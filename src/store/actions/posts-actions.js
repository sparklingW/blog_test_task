import * as consts from '../consts';

export const requestPosts = () => ({
  type: consts.REQUEST_POSTS
});
export const requestPostsSuccess = (payload) => ({
  type: consts.REQUEST_POSTS_SUCCESS,
  payload
});
export const requestPostsError = (payload) => ({
  type: consts.REQUEST_POSTS_ERROR,
  payload
});

export const requestOnePost = (postId) => ({
  type: consts.REQUEST_SINGLE_POST,
  postId,
});
export const requestOnePostSuccess = (payload) => ({
  type: consts.REQUEST_SINGLE_POST_SUCCESS,
  payload
});
export const requestOnePostError = (payload) => ({
  type: consts.REQUEST_SINGLE_POST_ERROR,
  payload
});

export const requestCreateComment = (payload) => ({
  type: consts.REQUEST_CREATE_COMMENT,
  payload
});
export const requestCreateCommentSuccess = (payload) => ({
  type: consts.REQUEST_CREATE_COMMENT_SUCCESS,
  payload
});
export const requestCreateCommentError = (payload) => ({
  type: consts.REQUEST_CREATE_COMMENT_ERROR,
  payload
});