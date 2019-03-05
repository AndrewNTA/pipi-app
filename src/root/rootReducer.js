import { combineReducers } from 'redux';
import { reducerPosts } from '../scenes/posts';
import { reducerUsers } from '../scenes/users';

const rootReducer = combineReducers({
  reducerPosts,
  reducerUsers
});
  
export default rootReducer;