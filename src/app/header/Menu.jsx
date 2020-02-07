import React from 'react';
import styled from 'styled-components';

function Menu() {
	return (
		<Div0>
			<ul>
				<li>Estruturas Organizacionais</li>
				<li>Cargos/Funções</li>
				<li>Relatórios</li>
				<li>Administração do Sistema</li>
			</ul>
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

	> ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;

		> li {
			list-style-type: none;
			flex-basis: 0;
			flex-grow: 1;
			text-align: center;
			line-height: 1.5em;
			margin-top: 8px;
			border-right: 1px solid #ccc;
		}
		> li:last-child {
			border-right: 0;
		}
	}
`;

export default Menu;
