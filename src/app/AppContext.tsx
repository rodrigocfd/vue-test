import React from 'react';

// Global app context initial state.
const initialState = {
	isAuth:  true,
	authMsg: '',
	phrase:  ''
};

// Global app auth context.
type StateT = typeof initialState;
type StateGetSetT = [StateT, React.Dispatch<React.SetStateAction<StateT>>];

const AppContext = React.createContext<StateGetSetT | undefined>(undefined);

// Context provider, should wrap entire application.
interface AppContextProviderProps  {
	children: React.ReactNode;
}

function AppContextProvider({children}: AppContextProviderProps) {
	const contextGetSet = React.useState(initialState);
	return (
		<AppContext.Provider value={contextGetSet}>
			{children}
		</AppContext.Provider>
	);
}

// Custom hook to retrieve and set context state.
type UseAppContextT = [StateT, (newVals: Partial<StateT>) => void];

function useAppContext(): UseAppContextT {
	const [state, setState] = React.useContext(AppContext) as StateGetSetT;
	function setPartialState(newVals: Partial<StateT>) {
		setState({...state, ...newVals});
	}
	return [state, setPartialState];
}

export {AppContextProvider, useAppContext};
