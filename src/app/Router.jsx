import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Home from '../home/Home';
import Texts from '../texts/Texts';
import NotFound from './NotFound';

function Router() {
	return (
		<Switch>
			<Route path="/home" component={Home} />
			<Route path="/texts" component={Texts} />
			<Route path="/404" component={NotFound} />

			<Route exact path="/">
				<Redirect to="/home" />
			</Route>
			<Redirect to="/404" />
		</Switch>
	);
}

export default Router;
