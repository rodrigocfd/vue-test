<template>
	<div id="app">
		<div id="nav" v-if="$store.state.isAuth">
			<router-link to="/home">Home</router-link> |
			<router-link to="/block">Block</router-link>
		</div>
		<div>
			<router-view />
		</div>
	</div>
</template>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
h1 {
	color: #555;
}
#nav {
	border-bottom: 1px solid #eee;
	padding-bottom: 10px;
	margin-bottom: 10px;
}
</style>
