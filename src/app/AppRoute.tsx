import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {useAppContext} from '../app/AppContext';
import jsfUrl from './header/jsfUrl';
import Header from './header/Header';
import First from '../first/First';
import Second from '../second/Second';
import NotFound from './NotFound';
import c from './AppRoute.module.scss';

// Describes all the routes and controls auth behavior.
function AppRoute() {
	const [context] = useAppContext();

	if (!context.isAuth) {
		return (
			<div className={c.authErr}>
				<div className={c.sad}>:(</div>
				<div>{context.authMsg}</div>
				<div><a href={jsfUrl('/index.jsf')}>Clique aqui</a> para fazer login.</div>
			</div>
		);
	}

	return (<>
		<Header />
		<div className={c.contents}>
			<Switch>
				<Route path="/first" component={First} />
				<Route path="/second" component={Second} />
				<Route path="/404" component={NotFound} />

				<Route exact path="/">
					<Redirect to="/first" />
				</Route>
				<Redirect to="/404" />
			</Switch>
		</div>
	</>);
}

export default AppRoute;
