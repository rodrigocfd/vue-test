import React from 'react';

import useAppContext from 'app/hooks/useAppContext';
import c from './UserInfoPerfis.module.scss';

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
