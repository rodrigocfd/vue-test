import React from 'react';

import Prompt from './Prompt';
import c from './Home.module.scss';

function Home() {
	const nameRef = React.useRef(null);
	const [isModalOpen, setModalOpen] = React.useState(false);
	const [name, setName] = React.useState('');

	React.useEffect(() => {
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
		<div>
			<Prompt openHook={[isModalOpen, setModalOpen]} initText={name}
				onOk={inputModalOnOk} onCancel={onInputModalCancel} />
			<h1 className={c.title}>Home</h1>
			<h2 className={c.subtitle}>This is the home component.</h2>
			<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
			<input type="button" value="Modify" onClick={btnModify} />
		</div>
	);
}

export default Home;
