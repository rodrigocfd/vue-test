import React from 'react';
import {HashRouter} from 'react-router-dom';

import {initialState, AppContext} from 'app/hooks/useAppContext';
import AppChecaLogin from './AppChecaLogin';
import AppRotas from './AppRotas';

/**
 * Componente de topo, raiz da aplicação.
 */
function App() {
	const contextGetSet = React.useState(initialState);

	return (
		<AppContext.Provider value={contextGetSet}>
			<AppChecaLogin>
				<HashRouter>
					<AppRotas />
				</HashRouter>
			</AppChecaLogin>
		</AppContext.Provider>
	);
}

export default App;
