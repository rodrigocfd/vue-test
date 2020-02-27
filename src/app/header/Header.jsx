import React from 'react';
import {Link} from 'react-router-dom';

import Menu from './Menu';
import c from './Header.module.scss';

function Header() {
	return (
		<div className={c.header}>
			<div className={c.aboveMenu}>
				<div className={c.left}>
					<div className={c.logo}></div>
				</div>
				<div className={c.rite}>
					<Link to="/first">First</Link> | {' '}
					<Link to="/second">Second</Link>
					[Logoff]
				</div>
			</div>
			<Menu />
		</div>
	);
}

export default Header;
