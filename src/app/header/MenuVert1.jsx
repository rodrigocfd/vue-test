import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MenuVert1(props) {
	return (
		<Ul0>
			<li className="title">
				<span>{props.title}</span>
			</li>
			{props.items.map(item =>
				<li key={item.label} className="entry">
					<span>{item.label}</span>
				</li>
			)}
		</Ul0>
	);
}

MenuVert1.propTypes = {
	title: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string
		})
	)
};

const Ul0 = styled.ul`
	position: absolute;
	top: 0px;
	margin: 2px;
	padding: 0;
	display: flex;
	flex-direction: column;
	background-color: #f6f7f7;
	border: 1px solid #aaba75;
	border-radius: 3px;
	max-width: 280px; /* empirically found */

	> li {
		list-style-type: none;
		margin: 0;
		padding: 0;
		text-align: left;
		cursor: pointer;

		> span {
			user-select: none;
			display: block;
			margin: 0 8px;
			padding: 12px 10px;
			border-bottom: 1px dotted #aebc82;
		}
	}
	> li.title {
		text-align: center;
		padding-bottom: 6px;
		cursor: auto;
	}
	> li.title, li:last-child {
		> span {
			border-bottom: 0;
		}
	}
	> li.entry:hover {
		background-color: #eee;
	}
`;

export default MenuVert1;
