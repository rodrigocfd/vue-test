import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Header from './header/Header';
import Home from '../home/Home';
import Texts from '../texts/Texts';
import NotFound from './NotFound';
import c from './AppRoute.module.scss';

function AppRoute() {
	return (<>
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
	</>);
}

export default AppRoute;
