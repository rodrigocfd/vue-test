export default {
	namespaced: true,
	state: {
		name: ''
	},
	getters: {
		getName: state => state.name // store.getters['typers/getName']
	},
	mutations: {
		setName(state, newName) { // store.commit('typers/setName', newName)
			state.name = newName;
		}
	}
};
