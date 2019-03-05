import { combineEpics } from 'redux-observable';
import { epicPosts } from '../scenes/posts';
import { epicUsers } from '../scenes/users';

const rootEpic = combineEpics(
  epicPosts,
  epicUsers
);
  
export default rootEpic;