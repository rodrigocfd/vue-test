function get(path, payload) {
	return fetch('/siorg-gestao-webapp/api' + path, {
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

export default {get};
