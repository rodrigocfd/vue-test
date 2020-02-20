function write(name, val, hours) {
	hours = hours || 1; // expiration is optional, default 1 hour
	let date = new Date();
	date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
	const expires = '; expires=' + date.toUTCString();
	document.cookie = name + '=' + (val || '') + expires + '; path=/';
}

function read(name) {
	const all = readAll();
	return all[name] || null;
}

function readAll() {
	const cookieLine = document.cookie;
	if (!cookieLine) return {}; // empty object if no cookies
	return cookieLine.split(';').reduce((res, rawVal) => {
		const [cokName, cokVal] = rawVal.split('=').map(str => str.trim());
		res[cokName] = cokVal;
		return res;
	}, {});
}

function erase(name) {
	document.cookie = name + '=; Max-Age=-99999999;';
}

export default {write, read, readAll, erase};
