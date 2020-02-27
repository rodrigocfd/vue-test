import React from 'react';

import MenuHorz from './MenuHorz';
import menuItems from './menuItems.json';
import c from './Menu.module.scss';

// Main application menu.
function Menu() {
	return (
		<div className={c.menu}>
			<MenuHorz items={menuItems} />
		</div>
	);
}

export default Menu;
