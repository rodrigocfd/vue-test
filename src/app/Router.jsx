import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';

import {mapStateToProps} from './reduxStore';
import Home from '../home/Home';
import Login from '../login/Login';
import NotFound from './NotFound';
import Texts from '../texts/Texts';

function Router(props) {
	if (!props.auth) { // not logged, that's all you'll see
		return (
			<Switch>
				<Route path="/login" component={Login} />
				<Redirect to="/login" />
			</Switch>
		);
	} else { // logged, show protected stuff
		return (
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/texts" component={Texts} />
				<Route path="/404" component={NotFound} />

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
}

export default connect(
	mapStateToProps('login.auth')
)(Router);
