import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuL2 from './MenuL2';

function MenuL1(props) {
	return (
		<Ul0>
			{props.items.map(item =>
				<li key={item.label}>
					<span>{item.label}</span>
					{item.menuL2 && <MenuL2 items={item.menuL2}/>}
				</li>
			)}
		</Ul0>
	);
}

MenuL1.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			menuL2: MenuL2.propTypes.items
		})
	)
};

const Ul0 = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;

	> li {
		list-style-type: none;
		flex-basis: 0;
		flex-grow: 1;
		text-align: center;
		line-height: 1.5em;
		margin-top: 8px;

		> span {
			display: inline-block;
			width: 100%;
			border-right: 1px solid #ccc;
		}
	}
	> li:last-child {
		span {
			border-right: 0;
		}
	}
`;

export default MenuL1;
