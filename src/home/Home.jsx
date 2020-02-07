import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import Prompt from './Prompt';

function Home() {
	const nameRef = useRef(null);
	const [isModalOpen, setModalOpen] = useState(false);
	const [name, setName] = useState('');

	useEffect(() => {
		nameRef.current.focus();
	}, []);

	function btnModify() {
		setModalOpen(true);
	}

	function inputModalOnOk(data) {
		nameRef.current.focus();
		setName(data);
	}

	function onInputModalCancel() {
		nameRef.current.focus();
	}

	return (
		<Div0>
			<Prompt openHook={[isModalOpen, setModalOpen]} initText={name}
				onOk={inputModalOnOk} onCancel={onInputModalCancel} />
			<h1>Home</h1>
			<h2>This is the home component.</h2>
			<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
			<input type="button" value="Modify" onClick={btnModify} />
		</Div0>
	);
}

const Div0 = styled.div`
	> h1 {
		color: salmon;
	}
	> h2 {
		color: saddlebrown;
	}
`;

export default Home;
