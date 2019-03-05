import { FETCH_ALL_POSTS_START, FETCH_ALL_POSTS_SUCCESS } from './actionsTypePosts';

const initialState = {
	listPosts: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_POSTS_START:
			return state;
		case FETCH_ALL_POSTS_SUCCESS:
			return { ...state, listPosts: action.payload };
		default:
			return state;
	}
};