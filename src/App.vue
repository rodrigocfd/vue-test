<template>
	<div class="app">
		<Menu v-if="$store.getters['login/isAuth']" />
		<div class="contents">
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

<style>/* App-wide global styles. */
body {
	margin: 0;
	padding: 0;
}
.app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.app > .contents {
	margin: 12px 10px;
}
button, input[type=submit] {
	cursor: pointer;
}
h1 {
	color: #555;
}
</style>
