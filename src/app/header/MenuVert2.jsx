import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import variaveisDeAmbiente from '../../variaveisDeAmbiente.json';

function MenuVert2(props) {
	return (
		<Ul0>
			{props.items.map(item =>
				<li key={item.label}>
					<span>
						{item.oldLink
							? <a href={variaveisDeAmbiente.dominioGestaoAntigo + item.oldLink}>{item.label}</a>
							: <>{item.label}</>
						}
					</span>
				</li>
			)}
		</Ul0>
	);
}

MenuVert2.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			oldLink: PropTypes.string
		})
	)
};

const Ul0 = styled.ul`
	position: absolute;
	top: -3px; /* relative to parent, because parent LI has "position: relative" */
	width: 284px; /* empirically found */
	left: 276px;
	margin: 2px;
	padding: 0;
	display: flex;
	flex-direction: column;
	background-color: #f6f7f7;
	border: 1px solid #aaba75;
	border-radius: 3px;
	box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, .1);
	visibility: hidden; /* parent component LI will toggle this */

	> li {
		list-style-type: none;
		position: relative; /* so nested UL can be relatively positioned */
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
	> li:last-child {
		> span {
			border-bottom: 0; /* last item won't have bottom border */
		}
	}
	> li:hover {
		background-color: #eee;
	}
`;

export default MenuVert2;
