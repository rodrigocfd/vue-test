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
		label: 'Proposta de Estrutura',
		menuVert2: [{
			label: 'Consultar Propostas'
		}, {
			label: 'Cadastrar Nova Proposta'
		}, {
			label: 'Consultar Pendências'
		}, {
			label: 'Consultar Erros de Efetivação'
		}]
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
		label: 'Provimento de cargo/função sem vínculo',
		menuVert2: [{
			label: 'Analisar solicitação de cargo/função sem vínculo'
		}, {
			label: 'Solicitar cargo/função sem vínculo'
		}]
	}]
}, {
	label: 'Relatórios',
	menuVert1: [{
		label: 'Anexo II/III'
	}, {
		label: 'Cargos Temporários'
	}, {
		label: 'Comparativo de Cargos/Funções entre Órgãos/Entidades'
	}, {
		label: 'Distribuição dos Cargos Funções por Órgão/Entidade'
	}, {
		label: 'Estrutura Hierárquica'
	}, {
		label: 'Evolução do Quantitativo de Cargos/Funções no Órgão/Entidade'
	}, {
		label: 'Finalidade e Competência das Unidades Organizacionais'
	}, {
		label: 'Impacto Orçamentário da Proposta'
	}, {
		label: 'Quadro Comparativo da Estrutura de Cargos/Funções da Proposta'
	}, {
		label: 'Quadro Resumo de Custos de Cargos/Funções da Proposta'
	}, {
		label: 'Titulares de Cargos/Funções e Endereços'
	}, {
		label: 'Unidades Organizacionais por UF ou Município'
	}]
}, {
	label: 'Administração do Sistema',
	menuVert1: [{
		label: 'Consultar Erros do Sistema'
	}, {
		label: 'Consultar Logs'
	}, {
		label: 'Manter Tabelas de Apoio'
	}, {
		label: 'Parâmetros de Pesquisa'
	}, {
		label: 'Cadastro de Parâmetros'
	}, {
		label: 'Gestão de Regras de Negócio'
	}, {
		label: 'Baixar Cópia do Banco de Dados'
	}]
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
