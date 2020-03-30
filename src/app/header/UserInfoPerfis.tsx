import React from 'react';

import useAppContext from 'app/hooks/useAppContext';
import c from './UserInfoPerfis.module.scss';

/**
 * Pequena label que, ao passar do mouse, mostra a lista de perfis do usuário.
 */
function UserInfoPerfis() {
	const [context] = useAppContext();

	return (
		<div className={c.wrap}>Perfis +
			<ul className={c.ul}>
				{context.userInfo?.perfis.map(perfil => (
					<li key={perfil.codigo} className={c.li}
						title={perfil.codigo}>{perfil.nome}</li>
				))}
			</ul>
		</div>
	);
}

export default UserInfoPerfis;
