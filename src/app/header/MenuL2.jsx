import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MenuL2(props) {
	return (
		<Ul0>
			{props.items && props.items.map(item =>
				<li key={item.label}>
					<span>{item.label}</span>
				</li>
			)}
		</Ul0>
	);
}

MenuL2.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string
		})
	)
};

const Ul0 = styled.ul`
	margin: 2px;
	padding: 0 8px;
	display: flex;
	flex-direction: column;
	background-color: #f6f7f7;
	border: 1px solid #aaba75;
	border-radius: 3px;

	> li {
		list-style-type: none;
		padding: 10px;
		text-align: left;
		border-bottom: 1px dotted #aebc82;
	}
	> li:last-child {
		border-bottom: 0;
	}
`;

export default MenuL2;
