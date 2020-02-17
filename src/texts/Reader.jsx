import React from 'react';

import * as Store from '../app/reduxStore';
import c from './Reader.module.scss';

function Reader() {
	const phrase = Store.useValue(state => state.phrase);

	return (
		<div>
			<h1 className={c.title}>Reader</h1>
			<div>In the store: {phrase}</div>
		</div>
	);
}

export default Reader;
