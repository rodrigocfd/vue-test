import React from 'react';

import {useModalState} from '../app/modal/Modal';
import useRefOpt from '../app/useRefOpt';
import useServerRequest from '../app/useServerRequest';
import Prompt from './Prompt';
import c from './First.module.scss';

function First() {
	const server = useServerRequest();
	const modalState = useModalState();
	const nameRef = useRefOpt(null, {focusOnMount: true});
	const [name, setName] = React.useState('');
	const [usr, setUsr] = React.useState({});

	React.useEffect(() => {
		(async () => {
			try {
				const data = await server.doGet('/informacaoUsuario');
				console.log(data);
				setTimeout(() => {
					setUsr(data);
				}, 1000);
			} catch (ex) { }
		})();
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

	if (!usr.codigo) {
		return <div>Carregando...</div>;
	}

	return (<>
		{modalState.render(
			<Prompt modalState={modalState} initText={name}
				onOk={onModalOk} onCancel={onModalCancel} />
		)}
		<h1 className={c.title}>First</h1>
		<h2 className={c.subtitle}>This is the first component.</h2>
		<h3>{usr.codigo} | {usr.nome}<br />{usr.orgaoUsuario.denominacao}</h3>
		<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
		<input type="button" value="Modify" onClick={btnModify} />
	</>);
}

export default First;
