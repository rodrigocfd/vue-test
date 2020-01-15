<template>
	<div id="nav" v-if="$store.state.login.isAuth">
		<router-link to="/home">Home</router-link> |
		<router-link to="/inputters">Inputters</router-link>
	</div>
</template>

<style>
#nav {
	border-bottom: 1px solid #eee;
	padding-bottom: 10px;
	margin-bottom: 10px;
}
</style>
