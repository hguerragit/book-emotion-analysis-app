import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import hasLoged from '../../../utils/hasLoged';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		hasLoged()
			? <Component {...props} />
			: <Redirect to='/Login' />
	)} />
);

export default PrivateRoute;