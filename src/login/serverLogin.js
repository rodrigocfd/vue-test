function serverLogin(username, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({auth: true, msg: 'Ok.'});
			// resolve({auth: false, msg: 'Your login failed miserably.'});
		}, 1500);
	});
}

export default serverLogin;
