const API_REST = '/siorg-gestao-webapp/api';
const BASE_JSF = '/siorg-gestao-webapp/private';

function useServer() {
	// Prepends a path with the JSF full qualified context domain.
	function geraUrlJsf(path) {
		if (process.env.NODE_ENV === 'development') {
			return 'http://localhost:8080' + BASE_JSF + path;
		}
		return BASE_JSF + path;
	}

	// Performs a GET request.
	function get(path, payload) {
		return fetch(API_REST + path, {
			method: 'GET',
			cache: 'no-cache',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify(payload)
		})
		.then(resp => resp.json());
	}

	return {
		geraUrlJsf,
		get
	};
}

export default useServer;
