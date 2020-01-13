import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		name: ''
	},
	mutations: { // never change the state directly, always mutate
		change(state, name) {
			state.name = name;
		}
	}
});
