import { combineReducers } from 'redux';
import accessReducer from './accessReducer';
import bookReducer from './bookReducer';
import emailReducer from './emailReducer';
import passwordsReducer from './passwordsReducer';
import recommendationsReducer from './recommendationsReducer';

const Reducers = combineReducers({
	access: accessReducer,
	book: bookReducer,
	email: emailReducer,
	password: passwordsReducer,
	recommendations: recommendationsReducer
});

export default Reducers;