import { feelingState } from './initialStates';
import { CLICK_FEELING } from '../actions/actionTypes';

const feelingReducer = (state=feelingState, action) => {
	const { type, payload } = action;

	switch(type) {
		case CLICK_FEELING:
			return { ...state, feeling: payload };
		default:
			return state;
	}
}

export default feelingReducer;