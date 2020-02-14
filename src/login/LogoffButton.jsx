import React from 'react';

import * as Store from '../app/reduxStore';

function LogoffButton() {
	const update = Store.useUpdate();

	return (
		<input type="button" value="Logoff"
			onClick={() => update('authToken', null)} />
	);
}

export default LogoffButton;
