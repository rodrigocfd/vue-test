<template>
	<div class="main">
		<template v-if="name.length > 0">
			Your name is <span class="theName">{{name}}</span>.
		</template>
		<template v-else>
			(No name kept on the Vuex store.)
		</template>
	</div>
</template>

<script>
export default {
	computed: {
		name() {
			return this.$store.state.inputters.name;
		}
	}
};
</script>

<style scoped>
.main {
	margin-top: 10px;
}
.theName {
	font-weight: bold;
}
</style>
