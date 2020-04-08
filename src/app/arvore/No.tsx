import React from 'react';

import useServerGet from 'app/hooks/useServerGet';
import useServerGetOnMount from 'app/hooks/useServerGetOnMount';
import Loading from 'app/Loading';
import UnidadeNoArvore from 'dto/UnidadeNoArvore';

interface Props {
	id: number;
}

function No({id}: Props) {
	const server = useServerGet();
	const unid = useServerGetOnMount('/unidadeNoArvore?id=' + id) as UnidadeNoArvore;
	const [aberto, setAberto] = React.useState(false);

	function abre() {
		if (aberto) {
			setAberto(false);
		} else {
			server.doGet('/unidadesNoArvoreFilhas?idPai=' + id)
				.then((filhas: UnidadeNoArvore[]) => {
					setAberto(true);
					console.log(filhas);
				});
		}
	}

	return !unid
		? <Loading text="Carregando unidade..." />
		: (
			<div>
				{unid.temFilhas &&
					<span onClick={abre}>[+] </span>
				}
				{unid.denominacao}
				{aberto &&
					<div>
						oi
					</div>
				}
			</div>
		);
}

export default No;
