import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuVert1 from './MenuVert1';

function MenuHorz(props) {
	return (
		<Ul0>
			{props.items.map(item =>
				<li key={item.label}>
					<span>{item.label}</span>
					{item.menuVert1 &&
						<MenuVert1 title={item.label} items={item.menuVert1} />
					}
				</li>
			)}
		</Ul0>
	);
}

MenuHorz.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			menuVert1: MenuVert1.propTypes.items
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
		position: relative;
		text-align: center;
		line-height: 19px;
		padding: 8px 0;
		margin: 0;
		cursor: pointer;

		> span {
			display: inline-block;
			width: 100%;
			border-right: 1px solid #ccc;
			margin: 0;
			user-select: none;
		}
	}
	> li:last-child {
		span {
			border-right: 0;
		}
	}
`;

export default MenuHorz;
