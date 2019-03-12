import { passwordState } from './initialStates';
import { CHANGE_PASSWORD, CHANGE_PASSWORDCHECK } from '../actions/actionTypes';
import isAny from '../isAny';

const passwordsReducer = (state=passwordState, action) => {
	const { payload, type } = action;
	const typeIsAny = isAny(type);

	const isPasswordOrCheck = typeIsAny(CHANGE_PASSWORD, CHANGE_PASSWORDCHECK);
	const isChangePassword = type === CHANGE_PASSWORD;

	const password = isChangePassword ? payload : state.password;
	const passwordCheck = isChangePassword ? state.passwordCheck : payload;
	const passwordsMatch = password === passwordCheck;

	const passwordIsValid = password.length >= 6;

	return !isPasswordOrCheck
		? state
		: {
			...state,
			password,
			passwordIsValid,
			passwordCheck,
			passwordsMatch
		};
};

export default passwordsReducer;