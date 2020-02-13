import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import variaveisDeAmbiente from '../../variaveisDeAmbiente.json';
import MenuVert2 from './MenuVert2';

function MenuVert1Li(props) {
	return (
		<Li0>
			<div className="flexWrap">
				{props.oldLink
					? <a className="label" href={variaveisDeAmbiente.dominioGestaoAntigo + props.oldLink}>{props.label}</a>
					: <span className="label">{props.label}</span>
				}
				{props.menuVert2 &&
					<div className="arrow">►</div>
				}
			</div>
			{props.menuVert2 &&
				<MenuVert2 items={props.menuVert2} />
			}
		</Li0>
	);
}

MenuVert1Li.propTypes = {
	label: PropTypes.string,
	oldLink: PropTypes.string,
	menuVert2: MenuVert2.propTypes.items // passed straight to MenuVert2 component
};

const Li0 = styled.li`
	list-style-type: none;
	position: relative; /* so nested UL can be relatively positioned */
	margin: 0;
	padding: 0;
	text-align: left;
	cursor: pointer;

	> div.flexWrap {
		display: flex;
		flex-direction: row;
		user-select: none;
		margin: 0 8px;
		padding: 12px 2px 12px 10px;
		border-bottom: 1px dotted #aebc82;
		align-items: center;

		> .label {
			flex-grow: 1;
			color: #44788d;
			text-decoration: none;
		}
		> .arrow {
			flex-basis: auto;
			margin-left: 2px;
			color: #4b849b;
			font-size: 80%;
		}
	}

	&:last-child {
		> div.flexWrap {
			border-bottom: 0; /* last item won't have bottom border */
		}
	}
	&:hover {
		background-color: #eee;
	}
`;

export default MenuVert1Li;
