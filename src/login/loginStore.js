export default {
	namespaced: true,
	state: {
		token: localStorage.getItem('token') || ''
	},
	getters: {
		isAuth: state => !!state.token // store.getters['login/isAuth']
	},
	mutations: {
		setToken(state, tokenVal) {
			state.token = tokenVal;
		}
	},
	actions: {
		doLogin(context, {username, password}) {
			return new Promise((resolve, reject) => {
				if (username !== '123' || password !== '123') {
					localStorage.removeItem('token');
					context.commit('setToken', '');
					reject('Usuário e senha: 123 e 123.');
				} else {
					const tokenVal = 'signed as ' + username;
					localStorage.setItem('token', tokenVal);
					context.commit('setToken', tokenVal);
					resolve();
				}
			});
		},
		doLogoff(context) {
			console.warn('doLogoff disabled');
			return new Promise((resolve, reject) => {
				localStorage.removeItem('token');
				context.commit('setToken', '');
				resolve();
			});
		}
	}
};
