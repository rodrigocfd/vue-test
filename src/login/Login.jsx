import React, {useEffect, useRef, useState} from 'react';

function Login() {
	const userNameRef = useRef(null);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		userNameRef.current.focus();
	}, []);

	function frmSubmit(ev) {
		ev.preventDefault();
		console.log(userName, password);
	}

	return (
		<form onSubmit={frmSubmit}>
			<h1>Login</h1>
			<div>
				<input type="text" ref={userNameRef} name="userName" required
					value={userName} onChange={e => setUserName(e.target.value)} />
			</div>
			<div>
				<input type="password" name="password" required
					value={password} onChange={e => setPassword(e.target.value)} />
			</div>
			<div><input type="submit" value="Proceed" /></div>
		</form>
	);
}

export default Login;
