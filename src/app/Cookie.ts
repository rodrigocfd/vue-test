function write(name: string, val: string, hours: number = 1) {
	let date = new Date();
	date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
	const expires = '; expires=' + date.toUTCString();
	document.cookie = name + '=' + (val || '') + expires + '; path=/';
}

function read(name: string): string | null {
	const all = readAll();
	return all[name] || null;
}

function readAll(): {[key: string]: string} {
	const cookieLine = document.cookie;
	if (!cookieLine) return {}; // empty object if no cookies
	return cookieLine.split(';').reduce((fin, rawVal) => {
		const [cokName, cokVal] = rawVal.split('=').map(str => str.trim());
		fin[cokName] = cokVal;
		return fin;
	}, {} as {[key: string]: string});
}

function erase(name: string) {
	document.cookie = name + '=; Max-Age=-99999999;';
}

export default {write, read, readAll, erase};
