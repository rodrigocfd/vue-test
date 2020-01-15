import Vue from 'vue';
import Vuex from 'vuex';

import block from '@/block/blockStore';
import login from '@/login/loginStore';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		block,
		login
	}
});
