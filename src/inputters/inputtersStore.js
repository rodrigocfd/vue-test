export default {
	namespaced: true,
	state: {
		name: ''
	},
	getters: {
		getName: state => state.name // store.getters['inputters/getName']
	},
	mutations: {
		setName(state, newName) {
			state.name = newName;
		}
	}
};
