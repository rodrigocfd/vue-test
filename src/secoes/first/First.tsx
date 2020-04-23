import React from 'react';
import {Link} from 'react-router-dom';

import useRefFocusOnMount from 'app/hooks/useRefFocusOnMount';
import Prompt from './Prompt';
import TestaRest from './TestaRest';

function First() {
	const [promptOpen, setPromptOpen] = React.useState(false);
	const nameRef = useRefFocusOnMount(null);
	const [name, setName] = React.useState('');

	function btnModify() {
		setPromptOpen(true);
	}

	function onPromptOk(text: string) {
		setPromptOpen(false);
		setName(text);
		nameRef.current.focus();
	}

	function onPromptCancel() {
		setPromptOpen(false);
		nameRef.current.focus();
	}

	return (<>
		<h1>First</h1>
		<h2 className="txtGreen">This is the first component.</h2>
		<p><Link to="/second">Go to second</Link></p>
		<input type="text" ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
		<input type="button" value="Modify" onClick={btnModify} />
		<TestaRest />

		{promptOpen &&
			<Prompt text={name}
				onOk={onPromptOk} onCancel={onPromptCancel} />
		}
	</>);
}

export default First;
