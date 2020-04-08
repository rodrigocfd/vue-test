import React from 'react';

import useAppContext from 'app/hooks/useAppContext';
import Arvore from 'app/arvore/Arvore';

function TestaRest() {
	const [context] = useAppContext();

	return (
		<Arvore idRaiz={context.userInfo.orgaoUsuario.id} />
	);
}

export default TestaRest;
