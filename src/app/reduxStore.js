import {combineReducers, createStore} from 'redux';
import {useDispatch, useSelector} from 'react-redux';

import login from '../login/store';
import texts from '../texts/store';

// Reducers from all modules.
const reducer = combineReducers({
	login,
	texts
});

// Custom hook to wrap useDispatch(), receiving action name and payload.
function useReduxAction() {
	const dispatch = useDispatch();
	return (type, payload) => dispatch({type, payload});
}

export {useReduxAction, useSelector as useReduxSelector}; // re-export useSelector for convenience
export default createStore(reducer);
