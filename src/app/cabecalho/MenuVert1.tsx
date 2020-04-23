import React from 'react';

import MenuVert1Entry, {MenuVert1EntryProps} from './MenuVert1Entry';
import c from './MenuVert1.module.scss';

interface Props {
	label: string;
	menuVert1: MenuVert1EntryProps[];
}

/**
 * Menu vertical de primeiro nível, filho do menu horizontal principal.
 */
function MenuVert1(props: Props) {
	return (
		<ul className={c.ul}>
			<li className={c.liTitle}>
				<span className={c.spanTitle}>{props.label}</span>
			</li>
			{props.menuVert1.map(item =>
				<MenuVert1Entry key={item.label} {...item} />
			)}
		</ul>
	);
}

export default MenuVert1;
