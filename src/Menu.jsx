import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Menu() {
	return (
		<Div0>
			<Link to="/home">Home</Link> | {' '}
			<Link to="/typers">Typers</Link>
		</Div0>
	);
}

const Div0 = styled.div`
	border-bottom: 1px solid #eee;
	padding: 10px;
	background-repeat: repeat;
`;

export default Menu;
