import Vue from 'vue';
import Vuex from 'vuex';

import typers from '@/typers/typersStore';
import login from '@/login/loginStore';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		typers,
		login
	}
});
