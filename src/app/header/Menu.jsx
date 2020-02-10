import React from 'react';
import styled from 'styled-components';

import MenuL1 from './MenuL1';

function Menu() {
	return (
		<Div0>
			<MenuL1 items={[
				{
					label: 'Estruturas Organizacionais',
					menuL2: [
						{
							label: 'Consultar Estruturas'
						},
						{
							label: 'Gestão de Órgãos/Entidades'
						},
						{
							label: 'Proposta de Estrutura'
						},
						{
							label: 'Cadastrar Informações Complementares'
						},
						{
							label: 'Comparar Estruturas'
						}
					]
				},
				{
					label: 'Cargos/Funções'
				},
				{
					label: 'Relatórios'
				},
				{
					label: 'Administração do Sistema'
				}
			]}/>
		</Div0>
	);
}

const Div0 = styled.div`
	display: inline-block;
	margin-left: 36px;
	margin-top: 20px;
	width: 1160px;
	height: 35px;
	border: 1px solid #88AEA2;
	border-radius: 7px;
	background-image: linear-gradient(#f7f7f7, #e2e2e2);
	color: #44788d;
`;

export default Menu;
