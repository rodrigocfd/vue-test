import React, {useState} from 'react';
import styled from 'styled-components';

import InputModal from './InputModal';

function Home() {
	const [isOpen, setOpen] = useState(false);

	function inputModalOnClose() {
		setOpen(false);
	}

	function btnModify() {
		setOpen(true);
	}

	return (
		<Div0>
			<InputModal isOpen={isOpen} onClose={inputModalOnClose} />
			<h1>Home</h1>
			<h2>This is the home component.</h2>
			<input type="text" />
			<input type="button" value="Modify" onClick={btnModify} />
		</Div0>
	);
}

const Div0 = styled.div`
	& > h1 {
		color: salmon;
	}
	& > h2 {
		color: saddlebrown;
	}
`;

export default Home;
