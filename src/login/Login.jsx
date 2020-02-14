import React from 'react';
import styled from 'styled-components';

import * as ServerAuth from './serverAuth';
import * as Store from '../app/reduxStore';
import Spinner from '../app/Spinner';

function Login() {
	const formRef = React.useRef(null);
	const userNameRef = React.useRef(null);

	const update = Store.useUpdate();

	const [userName, setUserName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [errMsg, setErrMsg] = React.useState('');
	const [isLoading, setLoading] = React.useState(false);

	React.useEffect(() => {
		userNameRef.current.focus();
	}, []);

	function frmSubmit(ev) {
		ev.preventDefault();
		setErrMsg('');
		setLoading(true);
		ServerAuth.login(userName, password) // will update cookie
			.then(data => {
				if (data.logged) {
					update('authToken', data.authToken); // will trigger router redirection
				} else {
					update('authToken', null);
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
	> div {
		> input {
			margin-bottom: 4px;
		}
	}
	> div.loading {
		margin-top: 20px;
		font-style: italic;
	}
	> div.err {
		margin-top: 20px;
		color: red;
	}
`;

export default Login;
