const initialState = {
	auth: false
};

function reducer(state = initialState, {type, payload}) {
	switch (type) {
		case 'setAuth': return {...state, auth: payload};
		default:        return state;
	}
}

export default reducer;
