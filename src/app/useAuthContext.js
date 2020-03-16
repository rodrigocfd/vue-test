import React from 'react';
import PropTypes from 'prop-types';

// Global app context initial state.
const initialState = {
	isAuth:  true,
	authMsg: '',
	phrase:  ''
};

// Global app auth context.
const AuthContext = React.createContext();

// Context provider, should wrap entire application.
function AuthContextProvider({children}) {
	const contextGetSet = React.useState(initialState); // [getter, setter]
	return (
		<AuthContext.Provider value={contextGetSet}>
			{children}
		</AuthContext.Provider>
	)
}
AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired
};

// Custom hook to retrieve and set context state.
function useAuthContext() {
	return React.useContext(AuthContext); // [getter, setter] from React.useState
}

export {AuthContextProvider};
export default useAuthContext;
