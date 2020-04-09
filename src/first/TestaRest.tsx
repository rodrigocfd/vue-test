import React from 'react';

import useAppContext from 'app/hooks/useAppContext';
import Arvore from 'app/arvore/Arvore';
import c from './TestaRest.module.scss';

function TestaRest() {
	const [context] = useAppContext();

	return (
		<div className={c.arvore}>
			<Arvore idRaiz={context.userInfo.orgaoUsuario.id} />
		</div>
	);
}

export default TestaRest;
