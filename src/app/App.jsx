import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import {reduxStore} from './useReduxStore';
import AppRoute from './AppRoute';

function App() {
	return (
		<Provider store={reduxStore}>
			<HashRouter>
				<AppRoute />
			</HashRouter>
		</Provider>
	);
}

export default App;
