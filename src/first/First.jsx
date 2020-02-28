import React from 'react';

import {useModalState} from '../app/modal/Modal';
import useRefOpt from '../app/useRefOpt';
import Prompt from './Prompt';

function First() {
	const modalState = useModalState();
	const nameRef = useRefOpt(null, {focusOnMount: true});
	const [name, setName] = React.useState('');

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
		<h1>First</h1>
		<h2 className="txtGreen">This is the first component.</h2>
		<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
		<input type="button" value="Modify" onClick={btnModify} />
	</>);
}

export default First;
