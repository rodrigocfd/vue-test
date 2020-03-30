import Perfil from './Perfil';
import UnidadeOrganizacional from './UnidadeOrganizacional';

interface InformacaoUsuario {
	codigo: string;
	nome: string;
	transacoes: string[];
	perfis: Perfil[];
	orgaoUsuario: UnidadeOrganizacional;
	unidadePermitida: UnidadeOrganizacional;
	unidadeRaiz: UnidadeOrganizacional;
}

export default InformacaoUsuario;
