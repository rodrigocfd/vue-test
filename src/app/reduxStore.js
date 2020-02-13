import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

import Cookie from './cookie';

// Global app store.
const initialState = {
	authToken: Cookie.read('auth'), // load the token when page loads
	phrase: ''
};

// Global app reducer.
function reducer(state, {type, payload}) {
	switch (type) {
		case 'setAuthToken': return {...state, authToken: payload};
		case 'setPhrase':    return {...state, phrase: payload};
		default:             return state;
	}
}

// Custom hook to wrap useDispatch(), receiving action name and payload.
// Usage:
//  const action = useAction();
//  action('setName', 'my name');
function useAction() {
	const dispatch = useDispatch();
	return (type, payload) => dispatch({type, payload});
}

export default {
	store: createStore(reducer, initialState),
	useValue: useSelector, // re-export useSelector for convenience
	useAction
};
