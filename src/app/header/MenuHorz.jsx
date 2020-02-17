import React from 'react';
import PropTypes from 'prop-types';

import MenuVert1 from './MenuVert1';
import c from './MenuHorz.module.scss';

function MenuHorz(props) {
	return (
		<ul className={c.ul}>
			{props.items.map(item =>
				<li className={c.li} key={item.label}>
					<div className={c.labelFlex}>
						<div className={c.label}>{item.label}</div>
						<div className={c.arrow}>▼</div>
					</div>
					<MenuVert1 title={item.label} items={item.menuVert1} />
				</li>
			)}
		</ul>
	);
}

MenuHorz.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			menuVert1: MenuVert1.propTypes.items // passed straight to MenuVert1 component
		})
	).isRequired
};

export default MenuHorz;
