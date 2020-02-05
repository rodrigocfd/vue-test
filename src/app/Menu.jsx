import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {useReduxSelector} from '../app/reduxStore';

function Menu() {
	const auth = useReduxSelector(store => store.login.auth);

	if (auth !== true) { // render only when authenticated
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

export default Menu;
