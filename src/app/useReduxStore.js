import {createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

/**
 * Generates the store object to be passed to react-redux provider.
 * @param {Object} initialState Initial state of the store.
 */
function createReduxStore(initialState) {
	return createStore(
		(state, {type, payload}) =>
			state[type] !== undefined ? {...state, [type]: payload} : state,
		initialState
	);
}

/**
 * Allows access to the store values in a similar way to React.useState().
 * @example
 * const [name, setName] = useReduxStore('name');
 * @param {string} name Name of the store field to be accessed.
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
export {createReduxStore};
