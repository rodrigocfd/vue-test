import React from 'react';

import * as ServerAuth from './serverAuth';
import * as Store from '../app/reduxStore';

function LogoffButton() {
	const update = Store.useUpdate();

	function doLogoff() {
		ServerAuth.logoff(); // will update cookie
		update('authToken', null); // will trigger router redirection
	}

	return (
		<input type="button" value="Logoff" onClick={doLogoff} />
	);
}

export default LogoffButton;
