import React from 'react';

import InformacaoUsuario from 'dto/InformacaoUsuario';

enum Auth { Loading, ServerOff, No, Yes }

/**
 * Estado inicial do contexto global da aplicação.
 */
const initialState = {
	auth:     Auth.Loading, // importante para o AppCheckAuth
	authMsg:  '',
	userInfo: null as InformacaoUsuario | null,
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
