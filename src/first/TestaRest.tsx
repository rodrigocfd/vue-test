import React from 'react';

import useServerGetOnMount from 'app/hooks/useServerGetOnMount';
import useAppContext from 'app/hooks/useAppContext';
import Loading from 'app/Loading';
import UnidadeOrganizacional from 'dto/UnidadeOrganizacional';

function TestaRest() {
	const [context] = useAppContext();

	const codOrgao = context.userInfo?.orgaoUsuario.codigo;
	const unid = useServerGetOnMount('/unidade?codigo=' + codOrgao) as UnidadeOrganizacional;

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
