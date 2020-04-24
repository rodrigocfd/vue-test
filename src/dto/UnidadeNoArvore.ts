interface UnidadeNoArvore {
	id: number;
	codigo: number;
	denominacao: string;
	sigla: string;
	idPai: number | null;
	temFilhas: boolean;
}

export default UnidadeNoArvore;
