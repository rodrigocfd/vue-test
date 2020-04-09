import useAppContext, {Auth} from './useAppContext';

const API_REST = '/siorg-gestao-webapp/api';

interface DoGetWrapperT {
	/**
	 * Faz uma consulta GET ao servidor, interceptando erros HTTP.
	 */
	doGet: (path: string, payload?: any) => Promise<any>;
}
const wrapper: DoGetWrapperT = { // wrapper singleton, permite checagem no [deps] do useEffect
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
	const [context, setContext] = useAppContext();

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
				authMsg: data.mensagem || 'Você não está autenticado.'
			});
			throw new Error('401');

		case 404: // Not Found
			const msg404 = `Erro da aplicação, chamada "${path}" não encontrada (HTTP 404).`;
			if (context.auth === Auth.Loading) { // aplicação ainda está sendo carregada, aborta
				setContext({
					auth:    Auth.No, // faz logoff automático aqui, o router vai redirecionar
					authMsg: msg404
				});
			} else {
				alert(msg404);
			}
			throw new Error('404');

		case 500: // Internal Server Error
			const msg500 = 'Erro interno do servidor, ou ele está fora do ar (HTTP 500).';
			if (context.auth === Auth.Loading) { // aplicação ainda está sendo carregada, aborta
				setContext({
					auth:    Auth.No, // faz logoff automático aqui, o router vai redirecionar
					authMsg: msg500
				});
			} else {
				alert(msg500);
			}
			throw new Error('500');

		default:
			return resp.json(); // tudo certo, encaminha a resposta do servidor
		}
	};

	return wrapper; // sempre retorna o mesmo singleton, importante para checagem do [deps] do useEffect
}

export default useServerGet;
