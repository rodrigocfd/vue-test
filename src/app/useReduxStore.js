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
const reduxStore = createStore(reducer, {
	auth:   {logged: true, msg: ''},
	phrase: ''
});

/**
 * Allows access to the store values in a similar way to React.useState().
 * @example
 * const [name, setName] = useReduxStore('name');
 *
 * @param {string} name Name of the Redux store variable to be accessed.
 * @returns {void}
 */
function useReduxStore(name) {
	const value = useSelector(state => state[name]);
	const dispatch = useDispatch();

	function setValue(newVal) {
		dispatch({type: name, payload: newVal});
	}

	return [value, setValue];
}

export default useReduxStore;
export {reduxStore};
