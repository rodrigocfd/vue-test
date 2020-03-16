import React from 'react';

import useAuthContext from '../app/useAuthContext';

function Reader() {
	const [data] = useAuthContext();

	return (
		<div>
			<h1>Reader</h1>
			<div>In the store: {data.phrase}</div>
		</div>
	);
}

export default Reader;
