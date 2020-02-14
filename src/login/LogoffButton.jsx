import React from 'react';

import * as Store from '../app/reduxStore';

function LogoffButton() {
	const doAction = Store.useAction();

	return (
		<input type="button" value="Logoff"
			onClick={() => doAction('setAuthToken', null)} />
	);
}

export default LogoffButton;
