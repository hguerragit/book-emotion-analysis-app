import { combineReducers } from 'redux';
import accessReducer from './accessReducer';
import bookReducer from './bookReducer';
import emailReducer from './emailReducer';
import feelingReducer from './feelingReducer';
import passwordsReducer from './passwordsReducer';
import recommendationsReducer from './recommendationsReducer';

const Reducers = combineReducers({
	access: accessReducer,
	book: bookReducer,
	email: emailReducer,
	feeling: feelingReducer,
	password: passwordsReducer,
	recommendations: recommendationsReducer
});

export default Reducers;