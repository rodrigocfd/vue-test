import React from 'react';
import {Link} from 'react-router-dom';

import useServerRequest from '../useServerRequest';
import Menu from './Menu';
import Loading from '../Loading';
import c from './Header.module.scss';

function Header() {
	const server = useServerRequest();
	const [userInfo, setUserInfo] = React.useState(null);

	React.useEffect(() => {
		server.doGet('/informacaoUsuario')
			.then(data => setUserInfo(data))
			.catch(() => {});
	}, [server]);

	return (
		<div className={c.header}>
			<div className={c.logoRow}>
				<div className={c.left}>
					<div className={c.logo}></div>
				</div>
				<div className={c.right}>
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
				</div>
			</div>
			<Menu />
		</div>
	);
}

export default Header;
