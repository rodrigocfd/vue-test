const BASE_JSF = '/siorg-gestao-webapp/private';

// Prepends a path with the JSF full qualified context domain.
function jsfUrl(path) {
	if (process.env.NODE_ENV === 'development') {
		return 'http://localhost:8080' + BASE_JSF + path;
	}
	return BASE_JSF + path;
}

export default jsfUrl;
