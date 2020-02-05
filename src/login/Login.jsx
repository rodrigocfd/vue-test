import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import {useReduxAction} from '../app/reduxStore';
import serverLogin from './serverLogin';

function Login() {
	const formRef = useRef(null);
	const userNameRef = useRef(null);
	const reduxAction = useReduxAction();

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		userNameRef.current.focus();
	}, []);

	function frmSubmit(ev) {
		ev.preventDefault();
		setErrMsg('');
		setLoading(true);
		serverLogin(userName, password)
			.then(data => {
				if (data.auth) {
					reduxAction('setAuth', true);
				} else {
					setPassword('');
					formRef.current.reset();
					setErrMsg(data.msg);
					setLoading(false);
					userNameRef.current.select();
					userNameRef.current.focus();
				}
			});
	}

	return (
		<form onSubmit={frmSubmit} ref={formRef}>
			<h1>Login</h1>
			<div>
				<input type="text" ref={userNameRef} name="userName" required
					value={userName} onChange={e => setUserName(e.target.value)}
					disabled={isLoading} placeholder="Username" />
			</div>
			<div>
				<input type="password" name="password" required
					value={password} onChange={e => setPassword(e.target.value)}
					disabled={isLoading} placeholder="Password" />
			</div>
			<div>
				<input type="submit" value="Proceed"
					disabled={isLoading} />
			</div>
			{isLoading && <DivLoading>Logging in...</DivLoading>}
			<DivErr>{errMsg}</DivErr>
		</form>
	);
}

const DivLoading = styled.div`
	margin-top: 20px;
	font-style: italic;
`;
const DivErr = styled.div`
	margin-top: 20px;
	color: red;
`;

export default Login;
