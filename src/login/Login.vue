<template>
	<form @submit.prevent="login">
		<h1>Autentique-se</h1>
		<!-- <input type="text" name="username" required placeholder="Usuário" v-model="username" /> -->
		<!-- <input type="password" name="password" required placeholder="Senha" v-model="password" /> -->
		<button type="submit">Login</button>
	</form>
</template>

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
</style>
