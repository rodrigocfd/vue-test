import React from 'react';
import {HashRouter} from 'react-router-dom';

import {initialState, AppContext} from 'app/hooks/useAppContext';
import AppRoute from './AppRoute';

function App() {
	const contextGetSet = React.useState(initialState);

	return (
		<AppContext.Provider value={contextGetSet}>
			<HashRouter>
				<AppRoute />
			</HashRouter>
		</AppContext.Provider>
	);
}

export default App;
