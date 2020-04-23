import React from 'react';

import useAppContext from 'app/hooks/useAppContext';

function Reader() {
	const [context] = useAppContext();

	return (
		<div>
			<h1>Reader</h1>
			<div>In the store: {context.phrase}</div>
		</div>
	);
}

export default Reader;
