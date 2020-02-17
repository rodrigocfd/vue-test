import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import * as Store from './reduxStore';
import Header from './header/Header';
import Router from './Router';
import c from './App.module.scss';

function App() {
	return (
		<Provider store={Store.store}>
			<HashRouter>
				<Header />
				<div className={c.contents}>
					<Router />
				</div>
			</HashRouter>
		</Provider>
	);
}

export default App;
