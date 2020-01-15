export default {
	namespaced: true,
	state: {
		isAuth: false // initially not logged
	},
	mutations: {
		setAuth(state, yesOrNo) {
			state.isAuth = yesOrNo;
		}
	},
	actions: {
		doLogin(context, {username, password}) {
			return new Promise((resolve, reject) => {
				context.commit('setAuth', true);
				resolve();
			});
		},
		doLogoff(context) {
			return new Promise((resolve, reject) => {
				context.commit('setAuth', false);
				resolve();
			});
		}
	}
};
