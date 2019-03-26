import { createAction, createAsynchronousAction } from './actionFactories';
import { 
	CLICK_ADD_BOOK_TO_BOOKLIST_FAILED,
	CLICK_ADD_BOOK_TO_BOOKLIST_PENDING,
	CLICK_ADD_BOOK_TO_BOOKLIST_SUCCESS,
	CLICK_BOOK,
	CLICK_LIST,
	LOGIN_REQUEST_FAILED,
	LOGIN_REQUEST_PENDING,
	LOGIN_REQUEST_SUCCESS,
	SIGN_UP_REQUEST_FAILED,
	SIGN_UP_REQUEST_PENDING,
	SIGN_UP_REQUEST_SUCCESS
 } from './actionTypes';

export const clickAddBookToBooklist = createAsynchronousAction(
	"addBookToTheBookList",
	CLICK_ADD_BOOK_TO_BOOKLIST_FAILED,
	CLICK_ADD_BOOK_TO_BOOKLIST_PENDING,
	CLICK_ADD_BOOK_TO_BOOKLIST_SUCCESS
);

export const clickBook = createAction(CLICK_BOOK);

export const clickList = createAction(CLICK_LIST);

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
