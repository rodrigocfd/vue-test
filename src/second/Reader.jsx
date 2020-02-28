import React from 'react';

import useReduxStore from '../app/useReduxStore';

function Reader() {
	const [phrase] = useReduxStore('phrase');

	return (
		<div>
			<h1>Reader</h1>
			<div>In the store: {phrase}</div>
		</div>
	);
}

export default Reader;
