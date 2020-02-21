import React from 'react';
import PropTypes from 'prop-types';

import useServer from '../useServer';
import MenuVert2 from './MenuVert2';
import c from './MenuVert1Entry.module.scss';

function MenuVert1Entry(props) {
	const server = useServer();

	return (
		<li className={c.li}>
			<div className={c.flexWrap}>
				{props.oldLink
					? <a className={c.label} href={server.geraUrlJsf(props.oldLink)}>{props.label}</a>
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

MenuVert1Entry.propTypes = {
	label: PropTypes.string,
	oldLink: PropTypes.string,
	menuVert2: MenuVert2.propTypes.items // passed straight to MenuVert2 component
};

export default MenuVert1Entry;
