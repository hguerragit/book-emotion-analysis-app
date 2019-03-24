import { bookListState } from './initialStates';
import {
	CLICK_LIST,
	LIST_BOOKS_REQUEST_FAILED,
	LIST_BOOKS_REQUEST_PENDING,
	LIST_BOOKS_REQUEST_SUCCESS 
} from '../actions/actionTypes';

import createBook from '../createBook';

const bookReducer = (state=bookListState, action) => {
	const { payload, type } = action;
	switch(type) {
		case CLICK_LIST:
			return {
				...state,
				bookList: state.books.filter(book => book.status === payload)
			}
		case LIST_BOOKS_REQUEST_PENDING:
			return {
				...state,
				bookListRequestIsPending: true
			};
		case LIST_BOOKS_REQUEST_SUCCESS:
			return {
				...state,
				books: payload.map(createBook),
				bookListRequestIsPending: false
			};
		case LIST_BOOKS_REQUEST_FAILED:
			return {
				...state,
				bookListRequestIsPending: false
			};
		default:
			return state;
	}
};

export default bookReducer;