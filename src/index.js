import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/custom/PrivateRoute';

import Browse from './pages/Browse';
import Feed from './pages/Feed';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Shelf from './pages/Shelf';
import SignUp from './pages/SignUp';
import Us from './pages/Us';
import How from './pages/How';
import Why from './pages/Why';

import {
	PAGE_BROWSE,
	PAGE_FEED,
	PAGE_INDEX,
	PAGE_LOGIN,
	PAGE_SHELF,
	PAGE_US,
	PAGE_HOW,
	PAGE_WHY
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
	faThumbsDown,
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
	faThumbsDown,
	faThumbsUp,
	faTwitter
);

ReactDOM.render(
	<Provider store={Store}>
		<BrowserRouter>
			<Switch>
				<Route path={PAGE_INDEX} exact={true} component={Shelf} />
				<Route path={PAGE_LOGIN} exact={true} component={Login} />
				<PrivateRoute path={PAGE_BROWSE} exact={true} component={Browse} />
				<PrivateRoute path={PAGE_FEED} exact={true} component={Feed} />
				<PrivateRoute path={PAGE_SHELF} exact={true} component={Shelf} />
				<PrivateRoute path={PAGE_US} exact={true} component={Us} />
				<PrivateRoute path={PAGE_HOW} exact={true} component={How} />
				<PrivateRoute path={PAGE_WHY} exact={true} component={Why} />
				<Route path="*" exact={true} component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.register();