import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {useReduxSelector} from '../app/reduxStore';
import LogoffButton from '../login/LogoffButton';

function Menu() {
	const authToken = useReduxSelector(store => store.login.authToken);

	if (authToken === null) {
		return null; // render only when authenticated
	}

	return (
		<Div0>
			<div className="left">
				<Link to="/home">Home</Link> | {' '}
				<Link to="/texts">Texts</Link>
			</div>
			<div className="right">
				<LogoffButton />
			</div>
		</Div0>
	);
}

const Div0 = styled.div`
	border-bottom: 1px solid #eee;
	padding: 10px;
	background-image: url(/spikes-pattern.png);
	background-repeat: repeat;

	& > .left, & > .right {
		display: inline;
	}
	& > .right {
		text-align: right;
		margin-left: 12px;
	}
`;

export default Menu;
