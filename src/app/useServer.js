const API_REST = '/siorg-gestao-webapp/api';

function useServer() {
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
		.then(resp => {
			if (resp.status === 500) {
				throw new Error('Error 500.');
			} else {
				resp.json();
			}
		})
		.catch(err => console.error(err));
	}

	return {
		get
	};
}

export default useServer;
