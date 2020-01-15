export default {
	namespaced: true,
	state: {
		name: ''
	},
	mutations: {
		setName(state, newName) {
			state.name = newName;
		}
	}
};
