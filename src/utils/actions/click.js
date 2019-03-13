import { createAction, createAsynchronousAction } from './actionFactories';
import { 
	CLICK_BOOK,
	LOGIN_REQUEST_FAILED,
	LOGIN_REQUEST_PENDING,
	LOGIN_REQUEST_SUCCESS,
	SIGN_UP_REQUEST_FAILED,
	SIGN_UP_REQUEST_PENDING,
	SIGN_UP_REQUEST_SUCCESS
 } from './actionTypes';

export const clickBook = createAction(CLICK_BOOK);

export const clickLogin = createAsynchronousAction(
	"login",
	LOGIN_REQUEST_FAILED,
	LOGIN_REQUEST_PENDING,
	LOGIN_REQUEST_SUCCESS
);
export const clickSignUp = createAsynchronousAction(
	"signUp",
	SIGN_UP_REQUEST_FAILED,
	SIGN_UP_REQUEST_PENDING,
	SIGN_UP_REQUEST_SUCCESS
);
