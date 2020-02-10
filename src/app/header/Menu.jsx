import React from 'react';
import styled from 'styled-components';

import MenuHorz from './MenuHorz';

const menuItems = [{
	label: 'Estruturas Organizacionais',
	menuVert1: [{
		label: 'Consultar Estruturas'
	}, {
		label: 'Gestão de Órgãos/Entidades'
	}, {
		label: 'Proposta de Estrutura'
	}, {
		label: 'Cadastrar Informações Complementares'
	}, {
		label: 'Comparar Estruturas'
	}]
}, {
	label: 'Cargos/Funções',
	menuVert1: [{
		label: 'Cadastrar Novo Cargo/Função',
	}, {
		label: 'Consultar Instâncias de Cargos/Funções'
	}, {
		label: 'Consultar Instâncias por Lei'
	}, {
		label: 'Consultar Limite Financeiro'
	}, {
		label: 'Definir Valor de Referência'
	}, {
		label: 'Provimento de cargo/função sem vínculo'
	}]
}, {
	label: 'Relatórios'
}, {
	label: 'Administração do Sistema'
}];

function Menu() {
	return (
		<Div0>
			<MenuHorz items={menuItems} />
		</Div0>
	);
}

const Div0 = styled.div`
	display: inline-block;
	width: 1160px; /* empirically found */
	margin: 21px 0 0 36px;
	border: 1px solid #88AEA2;
	border-radius: 7px;
	background-image: linear-gradient(#f7f7f7, #e2e2e2);
	color: #44788d;
`;

export default Menu;
