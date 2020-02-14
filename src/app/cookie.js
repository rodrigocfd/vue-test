function write(name, val, hours) {
	hours = hours || 1; // expiration is optional, default 1 hour
	let date = new Date();
	date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
	const expires = '; expires=' + date.toUTCString();
	document.cookie = name + '=' + (val || '') + expires + '; path=/';
}

function read(name) {
	let nameEq = name + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; ++i) {
		let c = ca[i].trim();
		if (c.indexOf(nameEq) === 0) {
			return c.substring(nameEq.length, c.length);
		}
	}
	return null; // cookie not found
}

function erase(name) {
	document.cookie = name + '=; Max-Age=-99999999;';
}

export {write, read, erase};
