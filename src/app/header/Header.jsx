import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {useReduxSelector} from '../reduxStore';
import LogoffButton from '../../login/LogoffButton';
import Menu from './Menu';

function Header() {
	const authToken = useReduxSelector(store => store.login.authToken);

	if (authToken === null) {
		return null; // render only when authenticated
	}

	return (
		<Div0>
			<div className="topWrap">
				<div className="left">
					<div className="logo"></div>
				</div>
				<div className="rite">
					<Link to="/home">Home</Link> | {' '}
					<Link to="/texts">Texts</Link>
					<LogoffButton />
				</div>
			</div>
			<Menu />
		</Div0>
	);
}

const Div0 = styled.div`
	border-bottom: 1px solid #ddd;
	background-repeat: repeat;

	> .topWrap {
		display: flex;
		flex-direction: row;

		> .left {
			flex-grow: 1;

			> .logo {
				display: inline-block;
				margin-left: 48px;
				margin-top: 36px;
				width: 333px;
				height: 68px;
				background: url('/images/logo-header.png') no-repeat center center;
			}
		}
		> .rite {
			flex-grow: 1;
			text-align: right;
			padding: 12px;
		}
	}
`;

export default Header;
