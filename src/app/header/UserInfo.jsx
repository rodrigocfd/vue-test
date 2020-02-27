import React from 'react';
import {Link} from 'react-router-dom';

import useServerGetOnMount from '../useServerGetOnMount';
import Loading from '../Loading';
import c from './UserInfo.module.scss';

function UserInfo() {
	const userInfo = useServerGetOnMount('/informacaoUsuario');

	return (<>
		<div className={c.userName}>
			{!userInfo
				? <Loading text="Carregando usuário..." />
				: <>Olá, {userInfo.nome}</>
			}
		</div>
		<div>
			<Link to="/first">First</Link> | {' '}
			<Link to="/second">Second</Link>
			[Logoff]
		</div>
	</>);
}

export default UserInfo;
