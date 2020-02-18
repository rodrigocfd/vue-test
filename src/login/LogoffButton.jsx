import React from 'react';

import ReduxStore from '../app/ReduxStore';
import ServerAuth from './ServerAuth';

function LogoffButton() {
	const update = ReduxStore.useUpdate();

	function doLogoff() {
		ServerAuth.logoff(); // will update cookie
		update('authToken', null); // will trigger router redirection
	}

	return (
		<input type="button" value="Logoff" onClick={doLogoff} />
	);
}

export default LogoffButton;
