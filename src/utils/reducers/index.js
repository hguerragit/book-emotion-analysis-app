import { combineReducers } from 'redux';
import accessReducer from './accessReducer';
import bookReducer from './bookReducer';
import bookListReducer from './bookListReducer';
import emailReducer from './emailReducer';
import passwordsReducer from './passwordsReducer';
import recommendationsReducer from './recommendationsReducer';

const Reducers = combineReducers({
	access: accessReducer,
	book: bookReducer,
	bookList: bookListReducer,
	email: emailReducer,
	password: passwordsReducer,
	recommendations: recommendationsReducer
});

export default Reducers;