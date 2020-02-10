import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MenuLabelWithArrow(props) {
	return (
		<Div0>
			<div className="label">{props.text}</div>
			{props.showArrow &&
				<div className="arrow">►</div>
			}
		</Div0>
	);
}

MenuLabelWithArrow.propTypes = {
	text: PropTypes.string.isRequired,
	showArrow: PropTypes.bool
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

export default MenuLabelWithArrow;
