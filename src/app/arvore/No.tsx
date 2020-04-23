import React from 'react';

import useServerGet from 'app/hooks/useServerGet';
import Carregando from 'app/Carregando';
import UnidadeNoArvore from 'dto/UnidadeNoArvore';
import c from './No.module.scss';

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
		<div className={c.no}>
			{unidade.temFilhas &&
				<span onClick={abre} className={c.btnAbre}>
					{carga === Carga.ABERTO ? '[–] ' : '[+] '}
				</span>
			}
			{unidade.denominacao}
			<div className={c.filhas}>
				{carga === Carga.CARREGANDO && <Carregando text="Carregando filhas..." />}
				{carga === Carga.ABERTO && filhas.map(filha =>
					<No key={filha.id} unidade={filha} />
				)}
			</div>
		</div>
	);
}

export default No;
