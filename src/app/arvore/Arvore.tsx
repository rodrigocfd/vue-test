import React from 'react';

import useServerGetOnMount from 'app/hooks/useServerGetOnMount';
import Carregando from 'app/Carregando';
import UnidadeNoArvore from 'dto/UnidadeNoArvore';
import No from './No';
import c from './Arvore.module.scss';

interface Props {
	idRaiz: number;
}

function Arvore({idRaiz}: Props) {
	const raiz = useServerGetOnMount('/unidadeNoArvore?id=' + idRaiz) as UnidadeNoArvore;

	return !raiz
		? <Carregando text="Carregando raiz..." />
		: (
			<div className={c.arvore}>
				<No unidade={raiz} />
			</div>
		);
}

export default Arvore;
