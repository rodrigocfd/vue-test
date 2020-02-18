import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

import Cookie from './Cookie';

// Global app reducer.
function reducer(state, {type, payload}) {
	switch (type) {
		case 'authToken': return {...state, authToken: payload};
		case 'phrase':    return {...state, phrase: payload};
		default:          return state;
	}
}

// Global app store.
const store = createStore(reducer, {
	authToken: Cookie.read('authToken'), // load the token when page loads
	phrase: ''
});

// Custom hook to wrap useDispatch(), receiving action name and payload.
// Usage:
//  const update = useUpdate();
//  update('name', 'John Doe');
function useUpdate() {
	const dispatch = useDispatch(); // react-redux hook
	return (type, payload) => dispatch({type, payload});
}

export default {
	store,
	useValue: useSelector, // re-export useSelector hook for convenience, naming it as useValue
	useUpdate
};
