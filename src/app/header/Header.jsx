import React from 'react';
import {Link} from 'react-router-dom';

import ReduxStore from '../ReduxStore';
import Menu from './Menu';
import c from './Header.module.scss';

function Header() {
	const authToken = ReduxStore.useValue(store => store.authToken);

	if (authToken === null) {
		return null; // render only when authenticated
	}

	return (
		<div className={c.header}>
			<div className={c.aboveMenu}>
				<div className={c.left}>
					<div className={c.logo}></div>
				</div>
				<div className={c.rite}>
					<Link to="/home">Home</Link> | {' '}
					<Link to="/texts">Texts</Link>
					[Logoff]
				</div>
			</div>
			<Menu />
		</div>
	);
}

export default Header;
