import React from 'react';
import styled from 'styled-components';

function Reader() {
	return (
		<Div0>
			<h1>Reader</h1>
		</Div0>
	);
}

const Div0 = styled.div`
	& > h1 {
		color: forestgreen;
	}
`;

export default Reader;
