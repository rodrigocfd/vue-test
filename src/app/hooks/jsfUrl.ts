const PORT_JSF = 8080;
const BASE_JSF = '/siorg-gestao-webapp/private';

/**
 * Adiciona, no começo do caminho, a URL completa da página JSF do Siorg antigo.
 */
function jsfUrl(caminho: string): string {
	if (process.env.NODE_ENV === 'development') {
		return `http://${window.location.hostname}:${PORT_JSF}` + BASE_JSF + caminho;
	}
	return BASE_JSF + caminho;
}

export default jsfUrl;
