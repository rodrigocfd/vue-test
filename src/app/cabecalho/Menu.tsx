import React from 'react';

import MenuVert1 from './MenuVert1';
import menuItems from './menuItems.json';
import c from './Menu.module.scss';

/**
 * Menu horizontal da aplicação, que aparece em todas as páginas.
 */
function Menu() {
	return (
		<div className={c.menu}>
			<ul className={c.ul}>
				{menuItems.map(item =>
					<li className={c.li} key={item.label}>
						<div className={c.labelFlex}>
							<div className={c.label}>{item.label}</div>
							<div className={c.arrow}>▼</div>
						</div>
						<MenuVert1 {...item} />
					</li>
				)}
			</ul>
		</div>
	);
}

export default Menu;
