import React from 'react';

import useServerGetOnMount from 'app/hooks/useServerGetOnMount';
import useAppContext from 'app/hooks/useAppContext';
import Loading from 'app/Loading';
import UnidadeNoArvore from 'dto/UnidadeNoArvore';

function TestaRest() {
	const [context] = useAppContext();

	const idOrgao = context.userInfo?.orgaoUsuario.id;
	const unid = useServerGetOnMount('/unidadeNoArvore?id=' + idOrgao) as UnidadeNoArvore;

	return !unid
		? (
			<div>
				<Loading text="Carregando unidade..." />
			</div>
		)
		: (
			<div>
				<div>{unid.denominacao}</div>
			</div>
		);
}

export default TestaRest;
