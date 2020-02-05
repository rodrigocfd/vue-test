import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {mapStateToProps} from '../reduxStore';

function Reader(props) {
	return (
		<Div0>
			<h1>Reader</h1>
			<div>In the store: {props.phrase}</div>
		</Div0>
	);
}

const Div0 = styled.div`
	& > h1 {
		color: forestgreen;
	}
`;

export default connect(
	mapStateToProps('texts.phrase')
)(Reader);
