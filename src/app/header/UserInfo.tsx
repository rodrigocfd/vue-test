import React from 'react';
// import {Link} from 'react-router-dom';

import useServerGetOnMount from '../useServerGetOnMount';
import UserInfoPerfis, {Perfil} from './UserInfoPerfis';
import Loading from '../Loading';
import c from './UserInfo.module.scss';

interface Data {
	nome: string;
	perfis: Perfil[];
}

function UserInfo() {
	const userInfo: Data = useServerGetOnMount('/informacaoUsuario');

	if (!userInfo) {
		return <Loading text="Carregando usuário..." />;
	}

	return (
		<div className={c.wrap}>
			<div className={c.userName}>{userInfo.nome}</div>
			<div className={c.perfisWrap}>
				<UserInfoPerfis {...userInfo.perfis} />
				{/* <Link to="/first">First</Link> | {' '}
				<Link to="/second">Second</Link>
				[Logoff] */}
			</div>
		</div>
	);
}

export default UserInfo;
