import React from 'react';
import styled from 'styled-components';

function Home() {
	return (
		<Div0>
			<h1>Home</h1>
			<h2>This is the home component.</h2>
		</Div0>
	);
}

const Div0 = styled.div`
	h1 {
		color: salmon;
	}
	h2 {
		color: saddlebrown;
	}
`;

export default Home;
