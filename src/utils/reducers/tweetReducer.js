import { tweetState } from './initialStates';
import { 
	TWEET_REQUEST_FAILED,
	TWEET_REQUEST_PENDING,
	TWEET_REQUEST_SUCCESS
} from '../actions/actionTypes';

const tweetReducer = (state=tweetState, action) => {
	const { payload, type } = action;

	switch(type) {
		case TWEET_REQUEST_PENDING:
			return {
				...state,
				tweetIsPending: true,
				tweetIsSuccessful: false
			};
		case TWEET_REQUEST_SUCCESS:
			return {
				...state,
				tweetIsPending: false,
				tweetIsSuccessful: true
			};
		case TWEET_REQUEST_FAILED:
			return {
				...state,
				tweetIsPending: false,
				tweetIsSuccessful: false
			};
		default:
			return state;
	}
};

export default tweetReducer;
