<template>
	<div class="app">
		<Menu v-if="$store.state.login.isAuth" />
		<div>
			<router-view />
		</div>
	</div>
</template>

<script>
import Menu from './Menu.vue';

export default {
	components: {
		Menu
	}
};
</script>

<style>
/* App-wide global styles. */
.app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
h1 {
	color: #555;
}
</style>
