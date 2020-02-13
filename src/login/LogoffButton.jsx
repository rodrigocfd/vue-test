import React from 'react';

import Redux from '../app/reduxStore';

function LogoffButton() {
	const reduxAction = Redux.useAction();

	return (
		<input type="button" value="Logoff"
			onClick={() => reduxAction('setAuthToken', null)} />
	);
}

export default LogoffButton;
