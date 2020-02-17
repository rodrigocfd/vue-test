import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import * as Cookie from '../app/cookie';
import * as Store from '../app/reduxStore';
import Home from '../home/Home';
import Login from '../login/Login';
import NotFound from './NotFound';
import Texts from '../texts/Texts';

function Router() {
	const authToken = Store.useValue(store => store.authToken);

	return authToken === null
		? ( // not logged, that's all you'll see
			<Switch>
				<Route path="/login" component={Login} />
				<Redirect to="/login" />
			</Switch>
		) : ( // logged, show protected stuff
			<Switch>
				<CookieProtectedRoute path="/home" component={Home} />
				<CookieProtectedRoute path="/texts" component={Texts} />
				<CookieProtectedRoute path="/404" component={NotFound} />

				<Route path="/login">
					<Redirect to="/home" />
				</Route>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Redirect to="/404" />
			</Switch>
		);
}

function CookieProtectedRoute({component: Component, ...otherProps}) {
	const authToken = Cookie.read('authToken');
	if (authToken === null) { // check cookie state every navigation
		const update = Store.useUpdate();
		update('authToken', null); // if no auth cookie, update global state
	}

	return (
		<Route {...otherProps} render={props => (
			authToken !== null // if no auth cookie, go to login
				? <Component {...props} />
				: <Redirect to="/login" />
			)
		}/>
	);
}

export default Router;

