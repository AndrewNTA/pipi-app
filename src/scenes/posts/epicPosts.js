import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable'; 
import { mergeMap, map } from 'rxjs/operators';
import { FETCH_ALL_POSTS_START } from './actionsTypePosts';
import { fetchAllPostsSuccess } from './actionsPosts';

const fetchAllPostsEpic = action$ => action$.pipe(
  ofType(FETCH_ALL_POSTS_START),
  mergeMap(action =>
    ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`).pipe(
      map(response => fetchAllPostsSuccess(response))
    )
  )
);

export default fetchAllPostsEpic;