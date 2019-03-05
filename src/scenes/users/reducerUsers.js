import { FETCH_ALL_USERS_START, FETCH_ALL_USERS_SUCCESS } from './actionsTypeUsers';

const initialState = {
	listUsers: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_USERS_START:
			return state;
		case FETCH_ALL_USERS_SUCCESS:
			return { ...state, listUsers: action.payload };
		default:
			return state;
	}
};