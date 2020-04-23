import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Cabecalho from 'app/cabecalho/Cabecalho';
import First from 'secoes/first/First';
import Second from 'secoes/second/Second';
import Erro404 from './Erro404';
import c from './AppRotas.module.scss';

/**
 * Descreve as rotas da aplicação.
 */
function AppRotas() {
	return (<>
		<Cabecalho />
		<div className={c.contents}>
			<Switch>
				<Route path="/first" component={First} />
				<Route path="/second" component={Second} />
				<Route path="/404" component={Erro404} />

				<Route exact path="/">
					<Redirect to="/first" />
				</Route>
				<Redirect to="/404" />
			</Switch>
		</div>
	</>);
}

export default AppRotas;
