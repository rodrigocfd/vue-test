import React from 'react';
import styled from 'styled-components';

import Reader from './Reader';
import Writer from './Writer';

function Typers() {
	return (
		<Div0>
			<Reader />
			<Writer />
		</Div0>
	);
}
const Div0 = styled.div`
	h1 {
		color: forestgreen;
	}
`;

export default Typers;
