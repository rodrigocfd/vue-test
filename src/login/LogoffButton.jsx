import React from 'react';

import {useReduxAction} from '../app/reduxStore';

function LogoffButton() {
	const reduxAction = useReduxAction();

	return (
		<input type="button" value="Logoff"
			onClick={() => reduxAction('setAuth', false)} />
	);
}

export default LogoffButton;
