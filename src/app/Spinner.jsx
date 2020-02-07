import React from 'react';
import styled from 'styled-components';

function Spinner() {
	return (
		<Div0></Div0>
	);
}

const Div0 = styled.div`
	--fore-color: #4d95eb;

	display: inline-block;
	position: relative;
	width: 31px;
	height: 31px;

	&:after {
		content: ' ';
		display: block;
		border-radius: 50%;
		width: 0;
		height: 0;
		margin: 8px;
		box-sizing: border-box;
		border: 14px solid var(--fore-color);
		border-color: var(--fore-color) transparent var(--fore-color) transparent;
		animation: lds-hourglass 1.2s infinite;
	}

	@keyframes lds-hourglass {
		0% {
			transform: rotate(0);
			animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}
		50% {
			transform: rotate(900deg);
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}
		100% {
			transform: rotate(1800deg);
		}
	}
`;

export default Spinner;
