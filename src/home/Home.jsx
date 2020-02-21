import React from 'react';

import {useModalState} from '../app/modal/Modal';
import useServer from '../app/useServer';
import Hooks from '../app/Hooks';
import Prompt from './Prompt';
import c from './Home.module.scss';

function Home() {
	const server = useServer();
	const modalState = useModalState();
	const nameRef = Hooks.useRef(null, {focusOnMount: true});
	const [name, setName] = React.useState('');

	React.useEffect(() => {
		server.get('/unidade')
			.then(data => console.log(data));
	}, [server]);

	function btnModify() {
		modalState.open();
	}

	function onModalOk(data) {
		nameRef.current.focus();
		setName(data);
	}

	function onModalCancel() {
		nameRef.current.focus();
	}

	return (<>
		{modalState.render(
			<Prompt modalState={modalState} initText={name}
				onOk={onModalOk} onCancel={onModalCancel} />
		)}
		<h1 className={c.title}>Home</h1>
		<h2 className={c.subtitle}>This is the home component.</h2>
		<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
		<input type="button" value="Modify" onClick={btnModify} />
	</>);
}

export default Home;
