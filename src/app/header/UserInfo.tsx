import React from 'react';
// import {Link} from 'react-router-dom';

import InformacaoUsuario from 'dto/InformacaoUsuario';
import useServerGetOnMount from 'app/useServerGetOnMount';
import Loading from 'app/Loading';
import UserInfoPerfis from './UserInfoPerfis';
import c from './UserInfo.module.scss';

function UserInfo() {
	const userInfo = useServerGetOnMount('/informacaoUsuario') as InformacaoUsuario;

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
