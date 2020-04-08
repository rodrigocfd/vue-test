import React from 'react';

import useServerGetOnMount from 'app/hooks/useServerGetOnMount';
import Loading from 'app/Loading';
import UnidadeOrganizacional from 'dto/UnidadeOrganizacional';

function TestaRest() {
	const unid = useServerGetOnMount('/unidade') as UnidadeOrganizacional;

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
