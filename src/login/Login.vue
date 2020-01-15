<template>
	<form @submit.prevent="login">
		<h1>Autentique-se</h1>
		<input type="text" name="username" required placeholder="Usuário" v-model="username" />
		<input type="password" name="password" required placeholder="Senha" v-model="password" />
		<button type="submit">Login</button>
		<div class="errMsg">{{errMsg}}</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			password: '',
			errMsg: '' // data is not kept when the component is removed from screen, use Vuex for that
		};
	},
	methods: {
		login() {
			const {username, password} = this;
			this.$store.dispatch('login/doLogin', {username, password})
				.then(() => this.$router.push('/')) // router won't update itself automatically
				.catch(msg => this.errMsg = msg);
		}
	}
};
</script>

<style scoped>
form {
	margin-left: 60px;
	border-left: 1px solid #eee;
	padding-left: 20px;
}
input, button {
	display: block;
	margin: 5px 0;
}
.errMsg {
	color: red;
	margin-top: 10px;
}
</style>
