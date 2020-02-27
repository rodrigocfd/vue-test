const PORT_JSF = 8080;
const BASE_JSF = '/siorg-gestao-webapp/private';

// Prepends a path with the JSF full qualified context domain.
function jsfUrl(path) {
	if (process.env.NODE_ENV === 'development') {
		return `http://${window.location.hostname}:${PORT_JSF}` + BASE_JSF + path;
	}
	return BASE_JSF + path;
}

export default jsfUrl;
