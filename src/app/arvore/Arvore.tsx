import React from 'react';

import No from './No';

interface Props {
	idRaiz: number;
}

function Arvore({idRaiz}: Props) {
	return (
		<div>
			<No id={idRaiz} />
		</div>
	);
}

export default Arvore;
