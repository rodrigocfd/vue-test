const initialState = {
	phrase: ''
};

function reducer(state = initialState, {type, payload}) {
	switch (type) {
		case 'setPhrase': return {...state, phrase: payload};
		default:          return state;
	}
}

export default reducer;
