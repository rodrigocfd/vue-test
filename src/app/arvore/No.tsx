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

	enum Carga { FECHADO, CARREGANDO, ABERTO }
	const [carga, setCarga] = React.useState(Carga.FECHADO);

	function abre() {
		if (carga === Carga.FECHADO) {
			setCarga(Carga.CARREGANDO);
			setTimeout(() => {
				server.doGet('/unidadesNoArvoreFilhas?idPai=' + id)
					.then((filhas: UnidadeNoArvore[]) => {
						console.log(filhas);
						setCarga(Carga.ABERTO);
					});
			}, 1000);
		} else if (carga === Carga.ABERTO) {
			setCarga(Carga.FECHADO);
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
				<div>
					{carga === Carga.CARREGANDO && <Loading text="Carregando filhas..." />}
					{carga === Carga.ABERTO &&
						<div>
							oi
						</div>
					}
				</div>
			</div>
		);
}

export default No;
