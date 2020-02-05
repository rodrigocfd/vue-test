import {combineReducers, createStore} from 'redux';

import login from './login/store';
import texts from './texts/store';

const reducer = combineReducers({ // reducers from all modules
	login,
	texts
});

function mapDispatchToProps(dispatch) {
	return {
		doUp: function(key, val) { // generic dispatch() to any value in store
			dispatch({
				type: 'set' + key[0].toUpperCase() + key.slice(1), // all actions must be prefixed with 'set'
				payload: val
			})
		}
	};
}

export {mapDispatchToProps};
export default createStore(reducer);
