import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import {createReduxStore} from './useReduxStore';
import AppRoute from './AppRoute';

const initialState = {
	auth:   {logged: true, msg: ''},
	phrase: ''
};

function App() {
	return (
		<Provider store={createReduxStore(initialState)}>
			<HashRouter>
				<AppRoute />
			</HashRouter>
		</Provider>
	);
}

export default App;
