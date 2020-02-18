import React from 'react';

import ReduxStore from '../app/ReduxStore';
import c from './Reader.module.scss';

function Reader() {
	const phrase = ReduxStore.useValue(state => state.phrase);

	return (
		<div>
			<h1 className={c.title}>Reader</h1>
			<div>In the store: {phrase}</div>
		</div>
	);
}

export default Reader;
