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

function mapDispatchToProps(dispatch) {
	return {
		doUp: function(key, val) { // generic dispatch function to any value in store
			dispatch({
				type: 'set' + key[0].toUpperCase() + key.slice(1), // all actions must be prefixed with 'set'
				payload: {
					[key]: val
				}
			})
		}
	};
}

export {mapDispatchToProps};
export default createStore(reducer, initialState);
