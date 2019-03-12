import { bookState } from './initialStates';
import { CLICK_BOOK } from '../actions/actionTypes';

const bookReducer = (state=bookState, action) => {
	const { payload, type } = action;
	switch(type) {
		case CLICK_BOOK:
			return {
				...state,
				...payload
			};
		default:
			return state;
	}
};

export default bookReducer;