import React from 'react';

import useServerGetOnMount from 'app/hooks/useServerGetOnMount';
import Loading from 'app/Loading';
import UnidadeNoArvore from 'dto/UnidadeNoArvore';

interface Props {
	id: number;
}

function No({id}: Props) {
	const unid = useServerGetOnMount('/unidadeNoArvore?id=' + id) as UnidadeNoArvore;
	// const unids = useServerGetOnMount('/unidadesNoArvoreFilhas?idPai=' + idOrgao) as UnidadeNoArvore[];

	return !unid
		? <Loading text="Carregando unidade..." />
		: (
			<div>{unid.denominacao}</div>
		);
}

export default No;
