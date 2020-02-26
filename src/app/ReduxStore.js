import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

// Global app reducer.
function reducer(state, {type, payload}) {
	switch (type) {
		case 'auth':   return {...state, auth: payload};
		case 'phrase': return {...state, phrase: payload};
		default:       return state;
	}
}

// Global app store with initial state.
const store = createStore(reducer, {
	auth:   {logged: true, msg: ''},
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
