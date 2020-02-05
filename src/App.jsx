import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import reduxStore from './reduxStore';
import Home from './home/Home';
import Login from './login/Login';
import Menu from './Menu';
import Texts from './texts/Texts';

function App() {
	return (
		<Provider store={reduxStore}>
			<HashRouter>
				<Menu />
				<DivContents>
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/texts" component={Texts} />
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
					</Switch>
				</DivContents>
			</HashRouter>
		</Provider>
	);
}

const DivContents = styled.div`
	margin: 20px;
`;

export default App;
