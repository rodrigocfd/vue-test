import React from 'react';

import c from './UserInfoPerfis.module.scss';

interface Perfil {
	codigo: string;
	nome: string;
}
interface Props {
	perfis: Perfil[];
}

function UserInfoPerfis({perfis}: Props) {
	return (
		<div className={c.wrap}>Perfis +
			<ul className={c.ul}>
				{perfis.map(perfil => (
					<li key={perfil.codigo} className={c.li}
						title={perfil.codigo}>{perfil.nome}</li>
				))}
			</ul>
		</div>
	);
}

export default UserInfoPerfis;
export type {Perfil};
