import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import * as Cookie from '../app/cookie';
import * as Store from '../app/reduxStore';
import serverLogin from './serverLogin';
import Spinner from '../app/Spinner';

function Login() {
	const formRef = useRef(null);
	const userNameRef = useRef(null);

	const doAction = Store.useAction();

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
				if (data.authToken) {
					data.authToken === null
						? Cookie.erase('auth') // keep cookie in sync with state
						: Cookie.write('auth', data.authToken);
					doAction('setAuthToken', data.authToken);
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
		<Form0 onSubmit={frmSubmit} ref={formRef}>
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
			{isLoading && <div className="loading">Logging in... <Spinner /></div>}
			<div className="err">{errMsg}</div>
		</Form0>
	);
}

const Form0 = styled.form`
	> .loading {
		margin-top: 20px;
		font-style: italic;
	}
	> .err {
		margin-top: 20px;
		color: red;
	}
`;

export default Login;
