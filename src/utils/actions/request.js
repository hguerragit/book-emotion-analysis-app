import { createAsynchronousAction } from './actionFactories';
import {
	RECOMMENDATIONS_BY_ID_REQUEST_FAILED,
	RECOMMENDATIONS_BY_ID_REQUEST_PENDING,
	RECOMMENDATIONS_BY_ID_REQUEST_SUCCESS,
	RECOMMENDATIONS_BY_FEELING_REQUEST_FAILED,
	RECOMMENDATIONS_BY_FEELING_REQUEST_PENDING,
	RECOMMENDATIONS_BY_FEELING_REQUEST_SUCCESS,
	RECOMMENDATIONS_RANDOM_REQUEST_FAILED,
	RECOMMENDATIONS_RANDOM_REQUEST_PENDING,
	RECOMMENDATIONS_RANDOM_REQUEST_SUCCESS
} from './actionTypes';

export const requestRecommendationsById = createAsynchronousAction(
	"recommendationsById",
	RECOMMENDATIONS_BY_ID_REQUEST_FAILED,
	RECOMMENDATIONS_BY_ID_REQUEST_PENDING,
	RECOMMENDATIONS_BY_ID_REQUEST_SUCCESS
);

export const requestRecommendationsByFeeling = createAsynchronousAction(
	"recommendationsByFeeling",
	RECOMMENDATIONS_BY_FEELING_REQUEST_FAILED,
	RECOMMENDATIONS_BY_FEELING_REQUEST_PENDING,
	RECOMMENDATIONS_BY_FEELING_REQUEST_SUCCESS
);

export const requestRandomRecommendations = createAsynchronousAction(
	"randomRecommendations",
	RECOMMENDATIONS_RANDOM_REQUEST_FAILED,
	RECOMMENDATIONS_RANDOM_REQUEST_PENDING,
	RECOMMENDATIONS_RANDOM_REQUEST_SUCCESS
);
