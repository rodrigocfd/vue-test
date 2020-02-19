import React from 'react';
import PropTypes from 'prop-types';

import Server from '../Server';
import c from './MenuVert2.module.scss';

function MenuVert2(props) {
	return (
		<ul className={c.ul}>
			{props.items.map(item =>
				<li key={item.label} className={c.li}>
					{item.oldLink
						? <a className={c.label} href={Server.geraUrlJsf(item.oldLink)}>{item.label}</a>
						: <span className={c.label}>{item.label}</span>
					}
				</li>
			)}
		</ul>
	);
}

MenuVert2.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			oldLink: PropTypes.string
		})
	)
};

export default MenuVert2;
