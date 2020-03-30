import React from 'react';

import jsfUrl from './jsfUrl';
import c from './MenuVert2.module.scss';

interface MenuVert2Item {
	label: string;
	oldLink: string;
}
interface Props {
	items: MenuVert2Item[];
}

function MenuVert2({items}: Props) {
	return (
		<ul className={c.ul}>
			{items.map(item =>
				<li key={item.label} className={c.li}>
					{item.oldLink
						? <a className={c.label} href={jsfUrl(item.oldLink)}>{item.label}</a>
						: <span className={c.label}>{item.label}</span>
					}
				</li>
			)}
		</ul>
	);
}

export default MenuVert2;
export type {MenuVert2Item};
