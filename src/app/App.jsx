import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import ReduxStore from './ReduxStore';
import AppRoute from './AppRoute';

function App() {
	return (
		<Provider store={ReduxStore.store}>
			<HashRouter>
				<AppRoute />
			</HashRouter>
		</Provider>
	);
}

export default App;
