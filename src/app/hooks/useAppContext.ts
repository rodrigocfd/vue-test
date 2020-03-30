import React from 'react';

import InformacaoUsuario from 'dto/InformacaoUsuario';

enum Auth { Loading, ServerOff, No, Yes }

// Global app context initial state.
const initialState = {
	auth:     Auth.Loading, // important for AppCheckAuth
	authMsg:  '',
	userInfo: null as InformacaoUsuario | null,
	phrase:   ''
};

// Global app auth context.
type StateT = typeof initialState;
type StateGetSetT = [StateT, React.Dispatch<React.SetStateAction<StateT>>];

const AppContext = React.createContext<StateGetSetT | undefined>(undefined);

// Custom hook to retrieve and set context state.
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
