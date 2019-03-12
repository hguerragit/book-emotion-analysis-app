import { createAction, createAsynchronousAction } from './actionFactories';
import { 
	CLICK_BOOK,
	CLICK_FEELING,
	LOGIN_REQUEST_FAILED,
	LOGIN_REQUEST_PENDING,
	LOGIN_REQUEST_SUCCESS,
	SIGN_UP_REQUEST_FAILED,
	SIGN_UP_REQUEST_PENDING,
	SIGN_UP_REQUEST_SUCCESS,
	TWITTER_SIGN_UP_REQUEST_PENDING,
	TWITTER_SIGN_UP_REQUEST_SUCCESS,
	TWITTER_SIGN_UP_REQUEST_FAILED
 } from './actionTypes';

export const clickBook = createAction(CLICK_BOOK);

export const clickFeeling = createAction(CLICK_FEELING);

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