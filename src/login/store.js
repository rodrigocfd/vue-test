import Cookie from './cookie';

const initialState = {
	authToken: Cookie.read('auth') // load the token when page loads
};

function reducer(state = initialState, {type, payload}) {
	switch (type) {
	case 'setAuthToken':
		payload === null
			? Cookie.erase('auth') // keep cookie in sync with state
			: Cookie.write('auth', payload);
		return {...state, authToken: payload};
	default:
		return state;
	}
}

export default reducer;
