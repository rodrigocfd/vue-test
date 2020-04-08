import Perfil from './Perfil';
import UnidadeOrganizacional from './UnidadeOrganizacional';

interface InformacaoUsuario {
	codigo: string;
	nome: string;
	perfis: Perfil[];
	transacoes: string[];
	transacaoAcessada: string;
	orgaoUsuario: UnidadeOrganizacional;
	unidadePermitida: UnidadeOrganizacional;
	unidadeRaiz: UnidadeOrganizacional;
}

export default InformacaoUsuario;
