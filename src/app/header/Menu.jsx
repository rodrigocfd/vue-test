import React from 'react';
import styled from 'styled-components';

import MenuHorz from './MenuHorz';
import menuItems from './menuItems.json';

function Menu() {
	return (
		<Div0>
			<MenuHorz items={menuItems} />
		</Div0>
	);
}

const Div0 = styled.div`
	display: inline-block;
	width: 1160px; /* empirically found */
	margin: 21px 0 0 36px;
	border: 1px solid #88AEA2;
	border-radius: 7px;
	background-image: linear-gradient(#f7f7f7, #e2e2e2);
	color: #44788d;
`;

export default Menu;
