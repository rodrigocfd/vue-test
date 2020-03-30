import useAppContext from './useAppContext';

const API_REST = '/siorg-gestao-webapp/api';

interface DoGetWrapperT {
	doGet: (path: string, payload?: any) => Promise<any>;
}
const wrapper: DoGetWrapperT = {
	doGet: (path: string) => new Promise(() => {})
};

/**
 * Returns doGet() to perform server requests.
 * @example
 * const server = useServerGet();
 * server.doGet('/myData')
 *   .then(data => console.log(data))
 *   .catch(() => {});
 */
function useServerGet() {
	const [, setContext] = useAppContext();

	wrapper.doGet = async function(path: string, payload?: any): Promise<any> {
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
			setContext({ // will redirect
				isAuth: false,
				authMsg: data.mensagem
			});
			throw new Error('401');

		case 404: // Not Found
			alert(`Erro da aplicação, chamada "${path}" não encontrada.`);
			throw new Error('404');

		case 500: // Internal Server Error
			alert('Erro interno do servidor, ou ele está fora do ar.');
			throw new Error('500');

		default:
			return resp.json(); // all good, send response to client
		}
	};

	return wrapper; // always return the same object, important for useEffect [deps] check
}

export default useServerGet;
