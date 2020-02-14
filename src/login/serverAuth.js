import * as Cookie from '../app/cookie';

function login(username, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const logged = true;

			if (logged) {
				Cookie.write('authToken', 'LOGGED ' + username);
				resolve({logged: true, authToken: 'LOGGED'});
			} else {
				Cookie.erase('authToken');
				reject({logged: false, msg: 'You login attempt failed miserably.'});
			}
		}, 2000);
	});
}

function logoff() {
	Cookie.erase('authToken');
}

export {
	login,
	logoff
};
