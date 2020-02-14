import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import styled from 'styled-components';

import * as Store from './reduxStore';
import Header from './header/Header';
import Router from './Router';

import './App.css'; // global app-wide styles

function App() {
	return (
		<Provider store={Store.store}>
			<HashRouter>
				<Header />
				<DivContents>
					<Router />
				</DivContents>
			</HashRouter>
		</Provider>
	);
}

const DivContents = styled.div`
	margin: 20px;
`;

export default App;
