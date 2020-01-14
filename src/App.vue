<template>
	<div id="app">
		<div id="nav">
			<router-link to="/home">Home</router-link> |
			<router-link to="/block">Block</router-link>
		</div>
		<div id="content">
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
#content {
	border-top: 1px solid #eee;
	margin-top: 10px;
	padding-top: 10px;
}
</style>
