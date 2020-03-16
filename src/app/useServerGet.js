import useAuthContext from './useAuthContext';

const API_REST = '/siorg-gestao-webapp/api';
const wrapper = {doGet: null};

/**
 * Returns doGet() to perform server requests.
 * @example
 * const server = useServerGet();
 * server.doGet('/myData')
 *   .then(data => console.log(data))
 *   .catch(() => {});
 */
function useServerGet() {
	const [auth, setAuth] = useAuthContext();

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

		switch (resp.status) {
		case 401: // Unauthorized
			const data = await resp.json();
			setAuth({ // will redirect
				...auth,
				isAuth: false,
				authMsg: data.mensagem
			});
			throw new Error(401);

		case 404: // Not Found
			alert(`Erro da aplicação, chamada "${path}" não encontrada.`);
			throw new Error(404);

		case 500: // Internal Server Error
			alert('Erro interno do servidor, ou ele está fora do ar.');
			throw new Error(500);

		default:
			return resp.json(); // all good, send response to client
		}
	};

	return wrapper; // always return the same object, important for useEffect [deps] check
}

export default useServerGet;
