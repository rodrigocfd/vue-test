import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuVert1 from './MenuVert1';

function MenuHorz(props) {
	return (
		<Ul0>
			{props.items.map(item =>
				<li key={item.label}>
					<div className="labelFlex">
						<div className="label">{item.label}</div>
						<div className="arrow">▼</div>
					</div>
					<MenuVert1 title={item.label} items={item.menuVert1} />
				</li>
			)}
		</Ul0>
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

const Ul0 = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;

	> li {
		list-style-type: none;
		flex-basis: 0;
		flex-grow: 1;
		position: relative; /* so nested UL can be relatively positioned */
		text-align: center;
		line-height: 19px;
		padding: 8px 0;
		margin: 0;

		> .labelFlex {
			display: flex;
			flex-direction: row;
			align-items: center;
			border-right: 1px solid #ccc;

			> .label {
				flex-grow: 1;
				user-select: none;
				text-align: center;
			}
			> .arrow {
				flex-basis: auto;
				margin: 0 7px 0 3px;
				color: #5393ac;
				font-size: 65%;
			}
		}
	}
	> li:last-child {
		> .labelFlex {
			border-right: 0;
		}
	}
	> li:hover > ul,
	> li > ul:hover {
		visibility: visible; /* toggle UL in child component */
	}
`;

export default MenuHorz;
