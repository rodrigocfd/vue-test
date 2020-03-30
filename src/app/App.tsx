import React from 'react';
import {HashRouter} from 'react-router-dom';

import {AppContextProvider} from '../app/AppContext';
import AppRoute from './AppRoute';

function App() {
	return (
		<AppContextProvider>
			<HashRouter>
				<AppRoute />
			</HashRouter>
		</AppContextProvider>
	);
}

export default App;
