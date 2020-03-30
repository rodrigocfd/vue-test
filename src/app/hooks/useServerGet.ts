import useAppContext, {Auth} from './useAppContext';

const API_REST = '/siorg-gestao-webapp/api';

interface DoGetWrapperT {
	doGet: (path: string, payload?: any) => Promise<any>;
}
const wrapper: DoGetWrapperT = { // wrapper para ajudar a checagem do useEffect [deps]
	doGet: (path: string) => new Promise(() => {})
};

/**
 * Retorna a função doGet() que faz requisições ao servidor.
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
			setContext({
				auth:    Auth.No, // faz logoff automático aqui, o router vai redirecionar
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
			return resp.json(); // tudo certo, encaminha a resposta do servidor
		}
	};

	return wrapper; // sempre retorna o mesmo objeto, importante para checagem do useEffect [deps]
}

export default useServerGet;
