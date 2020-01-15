import Vue from 'vue';
import Vuex from 'vuex';

import inputters from '@/inputters/inputtersStore';
import login from '@/login/loginStore';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		inputters,
		login
	}
});
