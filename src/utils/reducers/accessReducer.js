import { 
	ACCESS_REQUEST_FAILED,
	ACCESS_REQUEST_PENDING,
	ACCESS_REQUEST_SUCCESS,
	CHANGE_USER_ID,
	LOGIN_REQUEST_FAILED,
	LOGIN_REQUEST_PENDING,
	LOGIN_REQUEST_SUCCESS,
	SIGN_UP_REQUEST_FAILED,
	SIGN_UP_REQUEST_PENDING,
	SIGN_UP_REQUEST_SUCCESS
} from '../actions/actionTypes';
import { accessState } from './initialStates';

import isAny from '../isAny';

const accessReducer = (state=accessState, action) => {
	const { payload, type } = action;
	const typeIsAny = isAny(type);
	const typeIsPending = typeIsAny(
		ACCESS_REQUEST_PENDING, 
		LOGIN_REQUEST_PENDING, 
		SIGN_UP_REQUEST_PENDING
	);
	const typeIsSuccess = typeIsAny(
		ACCESS_REQUEST_SUCCESS, 
		LOGIN_REQUEST_SUCCESS, 
		SIGN_UP_REQUEST_SUCCESS
	);
	const typeIsFailed = typeIsAny(
		ACCESS_REQUEST_FAILED,
		LOGIN_REQUEST_FAILED, 
		SIGN_UP_REQUEST_FAILED
	);

	switch(true) {
		case CHANGE_USER_ID:
			return {
				...state,
				userId: payload
			}
		case typeIsPending:
			return {
				...state,
				accessHasFailed: false,
				accessHasSucceded: false,
				accessRequestHasFailed: false,
				accessRequestIsPending: true,
				userId: ""
			};
		case typeIsSuccess:
			const { id, status } = payload;
			const accessHasSucceded = status === "Success";
			const accessHasFailed = !accessHasSucceded;

			return {
				...state,
				accessHasFailed,
				accessHasSucceded,
				accessRequestHasFailed: false,
				accessRequestIsPending: false,
				userId: id
			};
		case typeIsFailed:
			return {
				...state,
				accessHasFailed: false,
				accessHasSucceded: false,
				accessRequestHasFailed: true,
				accessRequestIsPending: false,
				userId: ""
			};
		default:
			return state;
	}
};

export default accessReducer;