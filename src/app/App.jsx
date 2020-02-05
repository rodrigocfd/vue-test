import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import styled from 'styled-components';

import reduxStore from './reduxStore';
import Menu from './Menu';
import Router from './Router';

function App() {
	return (
		<Provider store={reduxStore}>
			<HashRouter>
				<Menu />
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
