import { recommendationsState } from './initialStates';

import {
	STATE_RECOMMENDATIONS_BY_FEELING,
	STATE_RECOMMENDATIONS_BY_ID,
	STATE_RECOMMENDATIONS_RANDOM,
	STATE_REQUEST_BY_FEELING_IS_PENDING,
	STATE_REQUEST_BY_ID_IS_PENDING,
	STATE_REQUEST_RANDOM_IS_PENDING
} from '../constants';

import {
	CLICK_SHORTEN_RECOMMENDATIONS_BY_FEELING,
	RECOMMENDATIONS_BY_FEELING_REQUEST_FAILED,
	RECOMMENDATIONS_BY_FEELING_REQUEST_PENDING,
	RECOMMENDATIONS_BY_FEELING_REQUEST_SUCCESS,
	RECOMMENDATIONS_BY_ID_REQUEST_FAILED,
	RECOMMENDATIONS_BY_ID_REQUEST_PENDING,
	RECOMMENDATIONS_BY_ID_REQUEST_SUCCESS,
	RECOMMENDATIONS_RANDOM_REQUEST_FAILED,
	RECOMMENDATIONS_RANDOM_REQUEST_PENDING,
	RECOMMENDATIONS_RANDOM_REQUEST_SUCCESS
} from '../actions/actionTypes';

import createBook from '../createBook';
import isAny from '../isAny';

const createRecommendations = (recommendations, requestIsPending) => ({
	recommendations,
	requestIsPending
});

const categories = {
	"BY_FEELING": { ...createRecommendations(
		STATE_RECOMMENDATIONS_BY_FEELING, 
		STATE_REQUEST_BY_FEELING_IS_PENDING) 
	},
	"BY_ID": { ...createRecommendations(
		STATE_RECOMMENDATIONS_BY_ID, 
		STATE_REQUEST_BY_ID_IS_PENDING) 
	},
	"RANDOM": { ...createRecommendations(
		STATE_RECOMMENDATIONS_RANDOM, 
		STATE_REQUEST_RANDOM_IS_PENDING) 
	}
};

const getRequestCategory = type => type
	.replace("RECOMMENDATIONS_", "")
	.replace(/_REQUEST(_(\w)*)+/, "");

const recommendationPendingStatuses = [
	RECOMMENDATIONS_BY_FEELING_REQUEST_PENDING,
	RECOMMENDATIONS_BY_ID_REQUEST_PENDING,
	RECOMMENDATIONS_RANDOM_REQUEST_PENDING
];

const recommendationFailedStatuses = [
	RECOMMENDATIONS_BY_FEELING_REQUEST_FAILED,
	RECOMMENDATIONS_BY_ID_REQUEST_FAILED,
	RECOMMENDATIONS_RANDOM_REQUEST_FAILED
];

const recommendationSuccessStatuses = [
	RECOMMENDATIONS_BY_FEELING_REQUEST_SUCCESS,
	RECOMMENDATIONS_BY_ID_REQUEST_SUCCESS,
	RECOMMENDATIONS_RANDOM_REQUEST_SUCCESS
];

const recommendationsReducer = (state=recommendationsState, action) => {
	const { type, payload } = action;
	const category = getRequestCategory(type);
	const { recommendations, requestIsPending } = categories[category] || {};

	const typeIsAny = isAny(type);
	const TYPE_IS_CHANGE_FEELING = typeIsAny(CLICK_SHORTEN_RECOMMENDATIONS_BY_FEELING);
	const REQUEST_IS_FAILURE = typeIsAny(...recommendationFailedStatuses);
	const REQUEST_IS_PENDING = typeIsAny(...recommendationPendingStatuses);
	const REQUEST_IS_SUCCESSFUL = typeIsAny(...recommendationSuccessStatuses);

	switch(true) {
		case TYPE_IS_CHANGE_FEELING:
			return {
				...state,
				[STATE_RECOMMENDATIONS_BY_FEELING]: payload
			};
		case REQUEST_IS_PENDING:
			return {
				...state,
				[requestIsPending]: true
			};
		case REQUEST_IS_SUCCESSFUL:
			return {
				...state,
				[recommendations]: payload.map(createBook),
				[requestIsPending]: false
			};
		case REQUEST_IS_FAILURE:
			return {
				...state,
				[requestIsPending]: false
			};
		default:
			return state;
	}
};

export default recommendationsReducer;
