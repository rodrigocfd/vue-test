import React from 'react';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import Home from './home/Home';
import Menu from './Menu';
import Typers from './typers/Typers';

function App() {
	return (
		<HashRouter>
			<Menu />
			<DivContents>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/typers" component={Typers} />
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
				</Switch>
			</DivContents>
		</HashRouter>
	);
}

const DivContents = styled.div`
	margin: 20px;
`;

export default App;
