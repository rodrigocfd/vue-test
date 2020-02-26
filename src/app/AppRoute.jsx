import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import ReduxStore from '../app/ReduxStore';
import Header from './header/Header';
import Home from '../home/Home';
import Texts from '../texts/Texts';
import NotFound from './NotFound';
import c from './AppRoute.module.scss';

// Describes all the routes and controls auth behavior.
function AppRoute() {
	const auth = ReduxStore.useValue(state => state.auth);

	return auth.logged ? (<>
		<Header />
		<div className={c.contents}>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/texts" component={Texts} />
				<Route path="/404" component={NotFound} />

				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Redirect to="/404" />
			</Switch>
		</div>
	</>) : ( // not authenticated, that's all you see
		<div className={c.authErr}>
			<div>{auth.msg}</div>
			<div><a href="/">Clique aqui</a> para fazer login.</div>
		</div>
	);
}

export default AppRoute;
