import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/custom/PrivateRoute';

import Feed from './pages/Feed';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import * as serviceWorker from './serviceWorker';
import Store from './utils/stores';

import 'tachyons';
import './index.css';
import './utils/styles/colors.css';
import './utils/styles/utils.css';
import './components/remake/a/a.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoodreadsG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { 
	faArrowLeft, 
	faArrowRight, 
	faArrowUp,
	faBars,
	faBook,
	faCheck, 
	faExclamation,
	faGlasses,
	faHome,
	faSearch,
	faTheaterMasks,
	faThumbsDown,
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faArrowLeft,
	faArrowRight,
	faArrowUp,
	faBars,
	faBook,
	faCheck,
	faExclamation, 
	faFacebookF, 
	faGlasses,
	faGoodreadsG,
	faHome,
	faSearch,
	faTheaterMasks,
	faThumbsDown,
	faThumbsUp,
	faTwitter
);

ReactDOM.render(
	<Provider store={Store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Login} />
				<Route path="/login" exact={true} component={Login} />
				<PrivateRoute path="/home" exact={true} component={Feed} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();