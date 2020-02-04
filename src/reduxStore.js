import {createStore} from 'redux';

const initialState = {
	phrase: ''
};

function reducer(state, {type, payload}) {
	switch (type) {
		case 'setPhrase': return {...state, phrase: payload.phrase};
		default:          return state;
	}
}

export default createStore(reducer, initialState);
