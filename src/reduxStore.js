import {combineReducers, createStore} from 'redux';

import typers from './typers/store';

const reducer = combineReducers({
	typers
});

function mapDispatchToProps(dispatch) {
	return {
		doUp: function(key, val) { // generic dispatch() to any value in store
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
export default createStore(reducer);
