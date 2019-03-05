import { FETCH_ALL_POSTS_START, FETCH_ALL_POSTS_SUCCESS } from './actionsTypePosts';

const fetchAllPostsStart = () => ({
  type: FETCH_ALL_POSTS_START
});

const fetchAllPostsSuccess = payload => ({
  type: FETCH_ALL_POSTS_SUCCESS,
  payload
});

export {
  fetchAllPostsStart,
  fetchAllPostsSuccess
};