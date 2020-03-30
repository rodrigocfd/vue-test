import React from 'react';

import Menu from './Menu';
import UserInfo from './UserInfo';
import c from './Header.module.scss';

// Main application header.
function Header() {
	return (
		<div className={c.header}>
			<div className={c.logoRow}>
				<div className={c.left}>
					<div className={c.logo}></div>
				</div>
				<div className={c.right}>
					<UserInfo />
				</div>
			</div>
			<Menu />
		</div>
	);
}

export default Header;