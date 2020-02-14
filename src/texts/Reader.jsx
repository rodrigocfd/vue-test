import React from 'react';
import styled from 'styled-components';

import * as Store from '../app/reduxStore';

function Reader() {
	const phrase = Store.useValue(state => state.phrase);

	return (
		<Div0>
			<h1>Reader</h1>
			<div>In the store: {phrase}</div>
		</Div0>
	);
}

const Div0 = styled.div`
	> h1 {
		color: forestgreen;
	}
`;

export default Reader;
