import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuVert2 from './MenuVert2';
import variaveisDeAmbiente from '../../variaveisDeAmbiente.json';

function MenuVert1Label(props) {
	return (
		<Div0>
			<div className="label">
				{props.oldLink
					? <a href={variaveisDeAmbiente.dominioGestaoAntigo + props.oldLink}>{props.label}</a>
					: <>{props.label}</>
				}
			</div>
			{props.menuVert2 &&
				<div className="arrow">►</div>
			}
		</Div0>
	);
}

MenuVert1Label.propTypes = {
	label: PropTypes.string,
	oldLink: PropTypes.string,
	menuVert2: MenuVert2.propTypes.items // passed straight to MenuVert2 component
};

const Div0 = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	> .label {
		flex-grow: 1;
	}
	> .arrow {
		flex-grow: 1;
		text-align: right;
		margin-left: 3px;
		color: #5393ac;
		font-size: 80%;
	}
`;

export default MenuVert1Label;
