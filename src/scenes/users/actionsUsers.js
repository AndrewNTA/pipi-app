import { FETCH_ALL_USERS_START, FETCH_ALL_USERS_SUCCESS } from './actionsTypeUsers';

const fetchAllUsersStart = () => ({
  type: FETCH_ALL_USERS_START
});

const fetchAllUsersSuccess = payload => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload
});

export {
  fetchAllUsersStart,
  fetchAllUsersSuccess
};