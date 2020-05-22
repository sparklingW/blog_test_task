import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { 
  requestPostsSuccess, 
  requestPostsError,
  requestOnePostSuccess,
  requestOnePostError,
  requestCreateCommentSuccess,
  requestCreateCommentError
} from '../actions/posts-actions';
import { REQUEST_POSTS, REQUEST_SINGLE_POST, REQUEST_CREATE_COMMENT } from '../consts';

function* getPosts() {
  try {
    const response = yield axios.get('https://simpleblogapi.herokuapp.com/posts');
    yield put(requestPostsSuccess(response.data));
  } catch (err) {
    yield put(requestPostsError(err));
  }
}
function* getSinglePost({ postId }) {
  try {
    const response = yield axios.get(`https://simpleblogapi.herokuapp.com/posts/${postId}?_embed=comments`);
    yield put(requestOnePostSuccess(response.data));
  } catch (err) {
    yield put(requestOnePostError(err));
  }
}

function* createComment({ payload }) {
  try {
    // console.log(payload);
    const response = yield axios.post(
      `https://simpleblogapi.herokuapp.com/comments`,
      {
        postId: Number(payload.postId),
        body: payload.commentBody
      }
    );
    console.log(response.data);
    // yield put(requestCreateCommentSuccess(response.data));
  } catch (err) {
    yield put(requestCreateCommentError(err));
  }
}

export function* watchPosts() {
  yield takeEvery(REQUEST_POSTS, getPosts);
  yield takeEvery(REQUEST_SINGLE_POST, getSinglePost);
  yield takeEvery(REQUEST_CREATE_COMMENT, createComment);
}