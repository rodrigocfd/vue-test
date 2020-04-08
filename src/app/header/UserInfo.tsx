import React from 'react';
// import {Link} from 'react-router-dom';

import useAppContext from 'app/hooks/useAppContext';
import UserInfoPerfis from './UserInfoPerfis';
import c from './UserInfo.module.scss';

/**
 * Informações do usuário, no canto superior direito. Estas informações são
 * trazidas pelo component AppCheckAuth quando a página é carregada.
 */
function UserInfo() {
	const [context] = useAppContext();

	return (
		<div className={c.wrap}>
			<div className={c.userName}>{context.userInfo.nome}</div>
			<div className={c.perfisWrap}>
				<UserInfoPerfis />
				{/* <Link to="/first">First</Link> | {' '}
				<Link to="/second">Second</Link>
				[Logoff] */}
			</div>
		</div>
	);
}

export default UserInfo;
