import React from 'react';
import {HashRouter} from 'react-router-dom';

import {AuthContextProvider} from './useAuthContext';
import AppRoute from './AppRoute';

function App() {
	return (
		<AuthContextProvider>
			<HashRouter>
				<AppRoute />
			</HashRouter>
		</AuthContextProvider>
	);
}

export default App;
