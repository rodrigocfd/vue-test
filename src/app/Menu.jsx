import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {mapStateToProps} from './reduxStore';

function Menu(props) {
	if (props.auth !== true) { // render only when authenticated
		return null;
	}

	return (
		<Div0>
			<Link to="/home">Home</Link> | {' '}
			<Link to="/texts">Texts</Link>
		</Div0>
	);
}

const Div0 = styled.div`
	border-bottom: 1px solid #eee;
	padding: 10px;
	background-image: url(/spikes-pattern.png);
	background-repeat: repeat;
`;

export default connect(
	mapStateToProps('login.auth')
)(Menu);
