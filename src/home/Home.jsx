import React from 'react';

import {useModalState} from '../app/modal/Modal';
import useRefOpt from '../app/useRefOpt';
import useServerRequest from '../app/useServerRequest';
import Prompt from './Prompt';
import c from './Home.module.scss';

function Home() {
	const server = useServerRequest();
	const modalState = useModalState();
	const nameRef = useRefOpt(null, {focusOnMount: true});
	const [name, setName] = React.useState('');
	const [unid, setUnid] = React.useState({});

	React.useEffect(() => {
		server.doGet('/unidade').then(data => {
			console.log(data);
			setTimeout(() => {
				setUnid(data);
			}, 1000);
		});
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

	// if (!unid.sigla) {
	// 	return <div>Carregando...</div>;
	// }

	return (<>
		{modalState.render(
			<Prompt modalState={modalState} initText={name}
				onOk={onModalOk} onCancel={onModalCancel} />
		)}
		<h1 className={c.title}>Home</h1>
		<h2 className={c.subtitle}>This is the home component.</h2>
		<h3>{unid.sigla} | {unid.nome}</h3>
		<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
		<input type="button" value="Modify" onClick={btnModify} />
	</>);
}

export default Home;
