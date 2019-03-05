import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable'; 
import { mergeMap, map } from 'rxjs/operators';
import { FETCH_ALL_USERS_START } from './actionsTypeUsers';
import { fetchAllUsersSuccess } from './actionsUsers';

const fetchAllUsersEpic = action$ => action$.pipe(
  ofType(FETCH_ALL_USERS_START),
  mergeMap(action =>
    ajax.getJSON(`https://jsonplaceholder.typicode.com/users`).pipe(
      map(response => fetchAllUsersSuccess(response))
    )
  )
);

export default fetchAllUsersEpic;