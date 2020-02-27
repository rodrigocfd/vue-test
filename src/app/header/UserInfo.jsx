import React from 'react';
// import {Link} from 'react-router-dom';

import useServerGetOnMount from '../useServerGetOnMount';
import UserInfoPerfis from './UserInfoPerfis';
import Loading from '../Loading';
import c from './UserInfo.module.scss';

function UserInfo() {
	const userInfo = useServerGetOnMount('/informacaoUsuario');

	if (!userInfo) {
		return <Loading text="Carregando usuário..." />;
	}

	return (
		<div className={c.wrap}>
			<div className={c.userName}>{userInfo.nome}</div>
			<div className={c.perfisWrap}>
				<UserInfoPerfis perfis={userInfo.perfis} />
				{/* <Link to="/first">First</Link> | {' '}
				<Link to="/second">Second</Link>
				[Logoff] */}
			</div>
		</div>
	);
}

export default UserInfo;
