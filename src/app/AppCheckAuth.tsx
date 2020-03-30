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
		if (context.auth === Auth.Loading) { // o estado inicial é Loading, foi setado no contexto
			setTimeout(async () => { // timeout pro loading aparecer, só pra ficar bonito
				try {
					const userInfo = await server.doGet('/informacaoUsuario') as InformacaoUsuario;
					setContext({userInfo, auth: Auth.Yes});
				} catch (err) {
					if (err.message === '500') {
						setContext({auth: Auth.ServerOff});
					}
				}
			}, 500);
		}
	}, [server, setContext, context.auth]);

	switch (context.auth) { // cada um dos possíveis estados do context.auth
		case Auth.Loading:   return Loadin();
		case Auth.ServerOff: return ServerOff();
		case Auth.No:        return No();
		default:             return <>{children}</>;
	}
}

const Loadin = () => (
	<div className={c.checking}>
		<Loading size={'48px'} />
		<div>Carregando Siorg...</div>
	</div>
);

const ServerOff = () => (
	<div className={c.checking}>
		<div className={c.sad}>:(</div>
		<div>O servidor está fora do ar.</div>
		<div><a href={jsfUrl('/index.jsf')}>Clique aqui</a> para tentar novamente.</div>
	</div>
);

const No = () => (
	<div className={c.checking}>
		<div className={c.sad}>:(</div>
		<div>Você não está autenticado.</div>
		<div><a href={jsfUrl('/index.jsf')}>Clique aqui</a> para fazer login.</div>
	</div>
);

export default AppCheckAuth;
