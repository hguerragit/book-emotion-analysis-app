import { 
	EMAIL_REQUEST_FAILED,
	EMAIL_REQUEST_PENDING,
	EMAIL_REQUEST_SUCCESS
} from '../actions/actionTypes';
import { emailState } from './initialStates';
import { STATUS_SUCCESS } from '../constants';

const isEmailValid = email => /^[a-z](\w|\.|-)*@[a-z]+(\.[a-z]+)+$/.test(email.toLowerCase());

const emailReducer = (state=emailState, action) => {
	const { payload, type } = action;

	switch(type) {
		case EMAIL_REQUEST_PENDING:
			return {
				...state,
				email: payload[0],
				emailIsPending: true,
				emailRequestIsSuccessful: false,
			};
		case EMAIL_REQUEST_SUCCESS:
			const { email, status } = payload;
			const emailIsNew = status !== STATUS_SUCCESS;
			const emailIsValid = isEmailValid(email);

			return {
				...state,
				emailIsNew,
				emailIsValid,
				emailIsPending: false,
				emailRequestIsSuccessful: true
			};
		case EMAIL_REQUEST_FAILED:
			return {
				...state,
				emailRequestIsPending: false,
				emailRequestIsSuccessful: false
			}
		default:
			return state;
	}
};

export default emailReducer;