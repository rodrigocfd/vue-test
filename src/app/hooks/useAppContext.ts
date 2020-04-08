import React from 'react';

import InformacaoUsuario from 'dto/InformacaoUsuario';

enum Auth { Loading, ServerOff, No, Yes }

/**
 * Estado inicial do contexto global da aplicação.
 */
const initialState = {
	auth:     Auth.Loading, // o auth inicial é importante para o componente AppCheckAuth
	authMsg:  '', // usado em caso de erro na autenticação
	userInfo: {} as InformacaoUsuario, // populado quando a autenticação é checada
	phrase:   ''
};

/**
 * Contexto global da aplicação.
 */
type StateT = typeof initialState;
type StateGetSetT = [StateT, React.Dispatch<React.SetStateAction<StateT>>];

const AppContext = React.createContext<StateGetSetT | undefined>(undefined);

/**
 * Hook para ler e escrever no contexto global da aplicação.
 */
type UseAppContextT = [StateT, (newVals: Partial<StateT>) => void];

function useAppContext(): UseAppContextT {
	const [state, setState] = React.useContext(AppContext) as StateGetSetT;
	function setPartialState(newVals: Partial<StateT>) {
		setState({...state, ...newVals});
	}
	return [state, setPartialState];
}

export default useAppContext;
export {Auth, initialState, AppContext};
