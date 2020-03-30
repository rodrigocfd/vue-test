/**
 * Grava um cookie com um tempo de expiração opcional em horas.
 */
function write(chave: string, valor: string, expiraHoras: number = 1) {
	let agora = new Date();
	agora.setTime(agora.getTime() + (expiraHoras * 60 * 60 * 1000));
	const expiraStr = '; expires=' + agora.toUTCString();
	document.cookie = chave + '=' + (valor || '') + expiraStr + '; path=/';
}

/**
 * Lê um valor de cookie.
 */
function read(chave: string): string | null {
	const todos = readAll();
	return todos[chave] || null;
}

/**
 * Lê todos os valores salvos em cookie.
 */
function readAll(): {[key: string]: string} {
	const linhaCookie = document.cookie;
	if (!linhaCookie) return {}; // retorna um objeto vazio se não há cookies
	return linhaCookie.split(';').reduce((fin, rawVal) => {
		const [cokName, cokVal] = rawVal.split('=').map(str => str.trim());
		fin[cokName] = cokVal;
		return fin;
	}, {} as {[key: string]: string});
}

/**
 * Apaga um valor do cookie.
 */
function erase(chave: string) {
	document.cookie = chave + '=; Max-Age=-99999999;';
}

export default {write, read, readAll, erase};
