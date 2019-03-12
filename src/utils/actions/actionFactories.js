import api from '../api';

export const createAction = type => payload => ({
	type,
	payload
});

export const createAsynchronousAction = (
	endpoint,
	failure,
	pending,
	success
) => (...params) => (dispatch) => {
 	dispatch({ type: pending, payload: params });

 	return api[endpoint](...params)
 	.then(json => dispatch({ type: success, payload: json }))
 	.catch(error => dispatch({ type: failure, payload: error }));
};