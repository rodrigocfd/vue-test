import React from 'react';
import PropTypes from 'prop-types';

import MenuVert1Entry from './MenuVert1Entry';
import c from './MenuVert1.module.scss';

function MenuVert1(props) {
	return (
		<ul className={c.ul}>
			<li className={c.liTitle}>
				<span className={c.spanTitle}>{props.title}</span>
			</li>
			{props.items.map(item =>
				<MenuVert1Entry key={item.label} {...item} />
			)}
		</ul>
	);
}

MenuVert1.propTypes = {
	title: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			...MenuVert1Entry.propTypes
		})
	).isRequired
};

export default MenuVert1;
