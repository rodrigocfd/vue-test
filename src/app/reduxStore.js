import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

import * as Cookie from './cookie';

// Global app reducer.
function reducer(state, {type, payload}) {
	switch (type) {
		case 'setAuthToken': return {...state, authToken: payload};
		case 'setPhrase':    return {...state, phrase: payload};
		default:             return state;
	}
}

// Global app store.
const store = createStore(reducer, {
	authToken: Cookie.read('auth'), // load the token when page loads
	phrase: ''
});

// Custom hook to wrap useDispatch(), receiving action name and payload.
// Usage:
//  const action = useAction();
//  action('setName', 'my name');
function useAction() {
	const dispatch = useDispatch();
	return (type, payload) => dispatch({type, payload});
}

export {
	store,
	useSelector as useValue, // re-export useSelector for convenience
	useAction
};
