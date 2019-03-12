import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/custom/PrivateRoute';

import Feed from './pages/Feed';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Browse from './pages/Browse';
import SignUp from './pages/SignUp';

import {
	PAGE_BROWSE,
	PAGE_FEED,
	PAGE_LOGIN,
	PAGE_SIGN_UP
} from './utils/constants';

import * as serviceWorker from './serviceWorker';
import Store from './utils/stores';

import 'tachyons';
import './index.css';
import './utils/styles/colors.css';
import './components/remake/a/a.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoodreadsG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { 
	faArrowLeft, 
	faArrowRight, 
	faArrowUp,
	faBars,
	faBook,
	faBookReader,
	faCheck, 
	faExclamation,
	faGlasses,
	faHeart,
	faHome,
	faSearch,
	faTheaterMasks,
	faThumbsUp
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faArrowLeft,
	faArrowRight,
	faArrowUp,
	faBars,
	faBook,
	faBookReader,
	faCheck,
	faExclamation, 
	faFacebookF, 
	faGlasses,
	faGoodreadsG,
	faHeart,
	faHome,
	faSearch,
	faTheaterMasks,
	faThumbsUp,
	faTwitter
);

ReactDOM.render(
	<Provider store={Store}>
		<BrowserRouter>
			<Switch>
				<Route path={PAGE_LOGIN} exact={true} component={Login} />
				<Route path={PAGE_SIGN_UP} exact={true} component={SignUp} />
				<PrivateRoute path={PAGE_BROWSE} exact={true} component={Browse} />
				<PrivateRoute path={PAGE_FEED} exact={true} component={Feed} />
				<Route path="*" exact={true} component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();