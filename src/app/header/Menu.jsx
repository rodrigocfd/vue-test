import React from 'react';

import MenuHorz from './MenuHorz';
import menuItems from './menuItems.json';
import c from './Menu.module.scss';

function Menu() {
	return (
		<div className={c.menu}>
			<MenuHorz items={menuItems} />
		</div>
	);
}

export default Menu;
