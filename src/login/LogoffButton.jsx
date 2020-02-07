import React from 'react';

import {useReduxAction} from '../app/reduxStore';

function LogoffButton() {
	const reduxAction = useReduxAction();

	return (
		<input type="button" value="Logoff"
			onClick={() => reduxAction('setAuthToken', null)} />
	);
}

export default LogoffButton;
