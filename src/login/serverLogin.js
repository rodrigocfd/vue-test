function serverLogin(username, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({authToken: 'AUTHORIZED', msg: null});
			// resolve({authToken: null, msg: 'Your login failed miserably.'});
		}, 1500);
	});
}

export default serverLogin;
