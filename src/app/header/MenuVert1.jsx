import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuVert1Entry from './MenuVert1Entry';

function MenuVert1(props) {
	return (
		<Ul0>
			<li className="title">
				<span>{props.title}</span>
			</li>
			{props.items.map(item =>
				<MenuVert1Entry key={item.label} {...item} />
			)}
		</Ul0>
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

const Ul0 = styled.ul`
	position: absolute;
	top: -1px; /* relative to parent, because parent LI has "position: relative" */
	width: 284px; /* empirically found */
	margin: 2px;
	padding: 0;
	display: flex;
	flex-direction: column;
	background-color: #f6f7f7;
	border: 1px solid #aaba75;
	border-radius: 3px;
	box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, .1);
	visibility: hidden; /* toggled by parent LI */

	li:hover > &,
	li > &:hover {
		visibility: visible; /* note: applied on the parent component LI */
	}

	> li.title {
		list-style-type: none;
		position: relative; /* so nested UL can be relatively positioned */
		margin: 0;
		padding: 0 12px 1px 0;
		text-align: center;

		> span {
			user-select: none;
			display: block;
			margin: 0 8px;
			padding: 12px 2px 12px 10px;
		}
	}
`;

export default MenuVert1;
