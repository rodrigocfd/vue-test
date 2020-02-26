import useReduxStore from './useReduxStore';

const API_REST = '/siorg-gestao-webapp/api';
const wrapper = {doGet: null};

/**
 * @callback doGet
 * @param {string} path Server path to be requested.
 * @param {Object} payload Free-form object to be sent as request body.
 * @return {Promise}
 */
/**
 * @typedef {Object} ServerRequestObj
 * @property {doGet} doGet Performs a GET request to server.
 */
 /**
 * Hook to perform server requests, validating responses.
 *
 * @returns {ServerRequestObj}
 */
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
			if (resp.status === 500) { // Internal Server Error
				alert('Erro interno do servidor, ou ele está fora do ar.');
				throw new Error(500);
			} else if (resp.status === 401) { // Unauthorized
				return resp.json().then(data => {
					setAuth({logged: false, msg: data.mensagem}); // will redirect
					throw new Error(401);
				});
			} else {
				return resp.json();
			}
		});
	};

	return wrapper; // always return the same object, important for [deps] check
}

export default useServerRequest;
