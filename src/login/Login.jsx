import React from 'react';

import Hooks from '../app/Hooks';
import ReduxStore from '../app/ReduxStore';
import ServerAuth from './ServerAuth';
import Spinner from '../app/Spinner';
import c from './Login.module.scss';

function Login() {
	const formRef = React.useRef(null);
	const userNameRef = Hooks.useFocusOnMountRef();

	const update = ReduxStore.useUpdate();

	const [userName, setUserName] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [errMsg, setErrMsg] = React.useState('');
	const [isLoading, setLoading] = React.useState(false);

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
		<form onSubmit={frmSubmit} ref={formRef}>
			<h1>Login</h1>
			<div>
				<input type="text" ref={userNameRef} name="userName" required
					className={c.textField} placeholder="Username"
					value={userName} onChange={e => setUserName(e.target.value)}
					disabled={isLoading} />
			</div>
			<div>
				<input type="password" name="password" required
					className={c.textField} placeholder="Password"
					value={password} onChange={e => setPassword(e.target.value)}
					disabled={isLoading} />
			</div>
			<div>
				<input type="submit" value="Proceed"
					disabled={isLoading} />
			</div>
			{isLoading && <div className={c.loading}>Logging in... <Spinner /></div>}
			<div className={c.err}>{errMsg}</div>
		</form>
	);
}

export default Login;
