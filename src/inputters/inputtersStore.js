export default {
	namespaced: true,
	state: {
		name: ''
	},
	getters: {
		getName: state => state.name // store.getters['inputters/getName']
	},
	mutations: {
		setName(state, newName) { // store.commit('inputters/setName', newName)
			state.name = newName;
		}
	}
};
