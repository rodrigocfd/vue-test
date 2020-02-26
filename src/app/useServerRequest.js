import useReduxStore from './useReduxStore';

const API_REST = '/siorg-gestao-webapp/api';
const wrapper = {doGet: null};

// Hook to perform server requests, validating responses.
function useServerRequest() {
	const [, setAuth] = useReduxStore('auth');

	wrapper.doGet = function(path, payload) {
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
			if (resp.status === 401) {
				resp.json().then(data => {
					setAuth({logged: false, msg: data.mensagem}); // will redirect
				});
			} else {
				return resp.json();
			}
		});
	};

	return wrapper; // always return the same object, important for [deps] check
}

export default useServerRequest;
