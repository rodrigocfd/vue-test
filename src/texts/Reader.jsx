import React from 'react';

import useReduxStore from '../app/useReduxStore';
import c from './Reader.module.scss';

function Reader() {
	const [phrase] = useReduxStore('phrase');

	return (
		<div>
			<h1 className={c.title}>Reader</h1>
			<div>In the store: {phrase}</div>
		</div>
	);
}

export default Reader;
