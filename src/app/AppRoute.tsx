import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Header from 'app/header/Header';
import First from 'first/First';
import Second from 'second/Second';
import NotFound from './NotFound';
import c from './AppRoute.module.scss';

/**
 * Descreve as rotas da aplicação.
 */
function AppRoute() {
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
