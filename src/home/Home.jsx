import React, {useState} from 'react';
import styled from 'styled-components';

import Prompt from './Prompt';

function Home() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [name, setName] = useState('');

	function inputModalOnOk(data) {
		setName(data);
	}

	function btnModify() {
		setModalOpen(true);
	}

	return (
		<Div0>
			<Prompt open={[isModalOpen, setModalOpen]} initText={name} onOk={inputModalOnOk} />
			<h1>Home</h1>
			<h2>This is the home component.</h2>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
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
