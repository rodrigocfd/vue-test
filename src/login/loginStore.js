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
				if (username !== '123' || password !== '123') {
					reject('Usuário e senha: 123 e 123.');
				} else {
					context.commit('setAuth', true);
					resolve();
				}
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
