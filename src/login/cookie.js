export default {
	write(name, val, hours) {
		let expires = '';
		if (hours) { // expiration is optional
			let date = new Date();
			date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
			expires = '; expires=' + date.toUTCString();
		}
		document.cookie = name + '=' + (val || '') + expires + '; path=/';
	},

	read(name) {
		let nameEq = name + '=';
		let ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; ++i) {
			let c = ca[i].trim();
			if (c.indexOf(nameEq) === 0) {
				return c.substring(nameEq.length, c.length);
			}
		}
		return null; // cookie not found
	},

	erase(name) {
		document.cookie = name + '=; Max-Age=-99999999;';
	}
};
