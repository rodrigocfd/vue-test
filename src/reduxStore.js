import {combineReducers, createStore} from 'redux';

import login from './login/store';
import texts from './texts/store';

// Reducers from all modules.
const reducer = combineReducers({
	login,
	texts
});

// Automation for namespaced keys.
// f('login.auth', 'other.stuff')
function mapStateToProps(...namespacedKeys) {
	const nks = namespacedKeys.map(namespacedKey => namespacedKey.split('.'));
	return state => {
		let props = {};
		for (const nk of nks) {
			props[nk[1]] = state[nk[0]][nk[1]];
		}
		return props;
	};
}

// Will inject doUp(key, val) into props, which triggers dispatch().
function mapDispatchToProps(dispatch) {
	return {
		doUp: function(key, val) {
			dispatch({
				type: 'set' + key[0].toUpperCase() + key.slice(1), // all reducer actions must be prefixed with 'set'
				payload: val
			})
		}
	};
}

export {mapStateToProps, mapDispatchToProps};
export default createStore(reducer);
