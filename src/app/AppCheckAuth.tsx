import React from 'react';

import InformacaoUsuario from 'dto/InformacaoUsuario';
import jsfUrl from 'app/hooks/jsfUrl';
import useAppContext, {Auth} from 'app/hooks/useAppContext';
import useServerGet from 'app/hooks/useServerGet';
import Loading from './Loading';
import c from './AppCheckAuth.module.scss';

interface Props {
	children: React.ReactNode;
}

/**
 * Faz a primeira chamada ao servidor para determinar se o usuário está logado.
 * Também verifica se o servidor está fora do ar.
 */
function AppCheckAuth({children}: Props) {
	const server = useServerGet();
	const [context, setContext] = useAppContext();

	React.useEffect(() => {
		if (context.auth === Auth.Loading) { // o estado inicial é Loading, foi setado em useAppContext
			setTimeout(async () => { // timeout pro loading aparecer, só pra ficar bonito
				try {
					const userInfo = await server.doGet('/informacaoUsuario') as InformacaoUsuario;
					setContext({userInfo, auth: Auth.Yes});
				} catch (err) {
					// Erros de consulta são tratados dentro da própria chamada em useServerGet.
				}
			}, 500);
		}
	}, [server, setContext, context.auth]);

	// Cada um dos estados de context.auth irá
	// renderizar um elemento diferente.
	switch (context.auth) {
	case Auth.Loading:
		return ( // primeira coisa que aparece na aplicação, porque o estado inicial é Loading
			<div className={c.checking}>
				<Loading size={'48px'} />
				<div>Carregando Siorg...</div>
			</div>
		);

	case Auth.ServerOff:
		return (
			<div className={c.checking}>
				<div className={c.sad}>:(</div>
				<div>{context.authMsg}</div>
				<div><a href={jsfUrl('/index.jsf')}>Clique aqui</a> para tentar novamente.</div>
			</div>
		);

	case Auth.No:
		return (
			<div className={c.checking}>
				<div className={c.sad}>:(</div>
				<div>{context.authMsg}</div>
				<div><a href={jsfUrl('/index.jsf')}>Clique aqui</a> para fazer login.</div>
			</div>
		);

	default: // renderiza a aplicação normalmente
		return <>{children}</>;
	}
}

export default AppCheckAuth;
