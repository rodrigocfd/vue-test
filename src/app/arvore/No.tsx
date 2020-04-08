import React from 'react';

import useServerGet from 'app/hooks/useServerGet';
import Loading from 'app/Loading';
import UnidadeNoArvore from 'dto/UnidadeNoArvore';

interface Props {
	unidade: UnidadeNoArvore;
}

function No({unidade}: Props) {
	const server = useServerGet();

	enum Carga { FECHADO, CARREGANDO, ABERTO }
	const [carga, setCarga] = React.useState(Carga.FECHADO);

	const [filhas, setFilhas] = React.useState([] as UnidadeNoArvore[]);

	function abre() {
		if (carga === Carga.FECHADO) {
			setCarga(Carga.CARREGANDO);
			setTimeout(() => {
				server.doGet('/unidadesNoArvoreFilhas?idPai=' + unidade.id)
					.then((filhasUnid: UnidadeNoArvore[]) => {
						setFilhas(filhasUnid);
						setCarga(Carga.ABERTO);
					});
			}, 500);
		} else if (carga === Carga.ABERTO) {
			setCarga(Carga.FECHADO);
		}
	}

	return (
		<div>
			{unidade.temFilhas &&
				<span onClick={abre}>[+] </span>
			}
			{unidade.denominacao}
			<div>
				{carga === Carga.CARREGANDO && <Loading text="Carregando filhas..." />}
				{carga === Carga.ABERTO && filhas.map(filha =>
					<No key={filha.id} unidade={filha} />
				)}
			</div>
		</div>
	);
}

export default No;
