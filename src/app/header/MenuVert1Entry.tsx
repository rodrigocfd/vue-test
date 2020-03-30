import React from 'react';

import jsfUrl from 'app/hooks/jsfUrl';
import MenuVert2, {MenuVert2Item} from './MenuVert2';
import c from './MenuVert1Entry.module.scss';

interface Props {
	label: string;
	oldLink?: string;
	menuVert2?: MenuVert2Item[]; // passado direto para MenuVert2
}

/**
 * Um único item de menu, do menu vertical de primeiro nível.
 */
function MenuVert1Entry(props: Props) {
	return (
		<li className={c.li}>
			<div className={c.flexWrap}>
				{props.oldLink
					? <a className={c.label} href={jsfUrl(props.oldLink)}>{props.label}</a>
					: <span className={c.label}>{props.label}</span>
				}
				{props.menuVert2 &&
					<div className={c.arrow}>►</div>
				}
			</div>
			{props.menuVert2 &&
				<MenuVert2 items={props.menuVert2} />
			}
		</li>
	);
}

export default MenuVert1Entry;
export type {Props as MenuVert1EntryProps};
