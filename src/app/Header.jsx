import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {useReduxSelector} from './reduxStore';
import LogoffButton from '../login/LogoffButton';

function Header() {
	const authToken = useReduxSelector(store => store.login.authToken);

	if (authToken === null) {
		return null; // render only when authenticated
	}

	return (
		<Div0>
			<div className="left">
				<div className="logo"></div>
				<Link to="/home">Home</Link> | {' '}
				<Link to="/texts">Texts</Link>
			</div>
			<div className="rite">
				<LogoffButton />
			</div>
		</Div0>
	);
}

const Div0 = styled.div`
	border-bottom: 1px solid #ddd;
	margin: 36px 48px;
	background-repeat: repeat;

	> .left {
		display: inline;

		> .logo {
			display: inline-block;
			width: 333px;
			height: 68px;
			background: url('/images/logo-header.png') no-repeat center center;
		}
	}
	> .rite {
		display: inline;
		text-align: right;
		margin-left: 12px;
	}
`;

export default Header;
