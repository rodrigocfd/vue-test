import Cookie from './cookie';

export default {
	namespaced: true,
	state: {
		token: Cookie.read('token')
	},
	getters: {
		isAuth: state => state.token !== null // store.getters['login/isAuth']
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
					Cookie.erase('token');
					context.commit('setToken', null);
					reject('Usuário e senha: 123 e 123.');
				} else {
					const tokenVal = 'signed as ' + username;
					Cookie.write('token', tokenVal, 2);
					context.commit('setToken', tokenVal);
					resolve();
				}
			});
		},
		doLogoff(context) {
			return new Promise((resolve, reject) => {
				Cookie.erase('token');
				context.commit('setToken', null);
				resolve();
			});
		}
	}
};
