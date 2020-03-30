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

function AppCheckAuth({children}: Props) {
	const server = useServerGet();
	const [context, setContext] = useAppContext();

	React.useEffect(() => {
		if (context.auth === Auth.Loading) { // initial app state is loading
			setTimeout(async () => { // a short timeout just to make it pretty
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

	if (context.auth === Auth.Loading) {
		return (
			<div className={c.checking}>
				<Loading size={'48px'} />
				<div>Carregando Siorg...</div>
			</div>
		);
	} else if (context.auth === Auth.ServerOff) {
		return (
			<div className={c.checking}>
				<div className={c.sad}>:(</div>
				<div>O servidor está fora do ar.</div>
				<div><a href={jsfUrl('/index.jsf')}>Clique aqui</a> para tentar novamente.</div>
			</div>
		);
	} else if (context.auth === Auth.No) {
		return (
			<div className={c.checking}>
				<div className={c.sad}>:(</div>
				<div>Você não está autenticado.</div>
				<div><a href={jsfUrl('/index.jsf')}>Clique aqui</a> para fazer login.</div>
			</div>
		);
	}

	return <>{children}</>;
}

export default AppCheckAuth;
