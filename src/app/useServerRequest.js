import useReduxStore from './useReduxStore';

const API_REST = '/siorg-gestao-webapp/api';
const wrapper = {doGet: null};

// Returns doGet() to perform server requests.
function useServerRequest() {
	const [, setAuth] = useReduxStore('auth');

	wrapper.doGet = async function(path, payload) {
		const resp = await fetch(API_REST + path, {
			method: 'GET',
			cache: 'no-cache',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify(payload)
		});

		if (resp.status === 500) { // Internal Server Error
			alert('Erro interno do servidor, ou ele está fora do ar.');
			throw new Error(500);
		} else if (resp.status === 401) { // Unauthorized
			const data = await resp.json();
			setAuth({logged: false, msg: data.mensagem}); // will redirect
			throw new Error(401);
		} else {
			return resp.json();
		}
	};

	return wrapper; // always return the same object, important for [deps] check
}

export default useServerRequest;
