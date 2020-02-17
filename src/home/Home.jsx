import React from 'react';

import {useModal} from '../app/Modal';
import Prompt from './Prompt';
import c from './Home.module.scss';

function Home() {
	const modalState = useModal();
	const nameRef = React.useRef(null);
	const [name, setName] = React.useState('');

	React.useEffect(() => {
		nameRef.current.focus();
	}, []);

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
		{modalState.isOpen &&
			<Prompt modalState={modalState} initText={name}
				onOk={onModalOk} onCancel={onModalCancel} />
		}
		<h1 className={c.title}>Home</h1>
		<h2 className={c.subtitle}>This is the home component.</h2>
		<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
		<input type="button" value="Modify" onClick={btnModify} />
	</>);
}

export default Home;
